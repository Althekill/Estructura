import bpy
import bmesh
import os
import random
import math

#if mat is None:
#    # create material
#    mat = bpy.data.materials.new(name="Material")
#Careful: when blender gets a repeated name, it doesn't throw error, but appends a .001 at the end
def createSphere(name,x,y,z,resolution,radius,materialname):
    # Create an empty mesh and the object.
    mesh = bpy.data.meshes.new(name)
    basic_sphere = bpy.data.objects.new(name, mesh)
    # Add the object into the scene.
    bpy.context.collection.objects.link(basic_sphere)
    # Select the newly created object
    bpy.context.view_layer.objects.active = basic_sphere
    basic_sphere.select_set(True)
    bpy.context.object.data.polygons.foreach_set('use_smooth',  [True] * len(bpy.context.object.data.polygons))
    #Move Sphere in the x,y,z
    basic_sphere.location.xyz=[x,y,z]
    # Get material, material should be already created by this point
    mat = bpy.data.materials.get(materialname)
    #Set Material
    # Assign it to object
    if basic_sphere.data.materials:
        # assign to 1st material slot
        basic_sphere.data.materials[0] = mat
    else:
        # no slots
        basic_sphere.data.materials.append(mat)
    # Construct the bmesh sphere and assign it to the blender mesh.
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=int(16*resolution), v_segments=int(8*resolution), diameter=2*radius)
    bm.to_mesh(mesh)
    bm.free()
    bpy.ops.object.modifier_add(type='SUBSURF')
    bpy.ops.object.shade_smooth() #Not necessary
    bpy.context.object.data.update()


def delete (object_name):
    obj = bpy.data.objects.get(object_name)
    if (obj!=None):
        obj.select_set(True)
        bpy.ops.object.delete()
#Export to gltf (needssome work )

def createTorus(name,resolution,radiusM,radiusm,materialname,rx,ry,rz):

    bpy.ops.mesh.primitive_torus_add(major_segments=int(48*resolution), minor_segments=int(12*resolution), major_radius=radiusM, minor_radius=radiusm,rotation=(rx,ry,rz))
    bpy.data.objects[-1].name=name #Tricky hack, can break anytime
    #Material
    bpy.data.objects[name].active_material=bpy.data.materials[materialname]
    bpy.data.objects[name].select_set(True)
    bpy.ops.object.shade_smooth() #Not necessary
    bpy.data.objects[name].select_set(False)
def export_objects(path,name):
        # set filename
        outpath = os.path.join(path, name)
        # export it
        # many other parameters can be added here
        bpy.ops.export_scene.gltf(
            filepath=outpath,
            use_visible=True
        )
def electrones(numero_electrones):
    ## TODO:
    #1 Obtener configuracion electronica
    contador=numero_electrones
    configuracion=[]
    orbitales  = [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,10,6,2]
    cuantico_n = [1,2,2,3,3,4,3 ,4,5,4 ,5,6,4 ,5 ,6,7,5 ,6 ,7,8]
    cuantico_l = [0,0,1,0,1,0,2 ,1,0,2 ,1,0,3 ,2 ,1,0,3 ,2 ,1,0]
    for val in range (0,len(orbitales)):
        contador-=orbitales[val]
        if contador<=0:
            configuracion=orbitales[0:val+1]
            break
    if contador<0:
        configuracion[-1]+=contador #porque contador es negativo
        contador=0
    #2 Obtener la cantidad de electrones en cada nivel de energia
    #print(configuracion)
    electrones_nivel=[0,0,0,0,0,0,0,0]
    for i in range (0,len(configuracion)):
        n=cuantico_n[i]
        electrones_nivel[n-1]+=configuracion[i]
    #print(electrones_nivel)
    #Generar los electrones por nivel
    separacion_nivel=1.5
    radio_electron=0.09
    c=1
    for i in range (0,8):
        r=(i+1)*separacion_nivel
        n=electrones_nivel[i]
        #Contorno de los orbitales
        if (n>0):
            createTorus(f"orbital_{i+1}",2,r,0.04,"Orbital",2*math.pi,0,0)
        for k in range (0,n):
            xe=r*math.cos((k*2*math.pi)/n)
            ze=r*math.sin((k*2*math.pi)/n)
            name=f"electron_{c}"
            c+=1
            createSphere(name,xe,ze,0,1.5,radio_electron,"Electron")




## TODO: Empacar todo en diferentes funciones, modicar el script de exportacion para que exporte todos los objetos
# Hacer una funcion que borre todos los mesh en la escena
#hacer los contornos de los orbitales

#Procedimiento
#1.-Crear los materiales para cada particula (manualmente)
#2.-Definir un dirctorio de trabajo donde se gurdaran todos los exportados
#3.-Hacer un loop que cree cada atomo
#3.1 Usar las formulas para colocar los protones y neutrones (empezar con un radio de aleatoriedad de cero
# y aumentar con el numero atomico para que no queden feos los protones)
#3.1.1 Agregar los materiales a cada proton y neutron
#3.2 hacer una funcion que acomode los electrones a iguales separaciones dependiendo de la cantidad de atomos y
#Los niveles de energia, tambien colocar un contorno para los orbitales
#3.2.1 Agregar los materiales a cada electron
#3.3 Exportar el resultado a gltf con el formato de nombre "atomo_numeroatomico.glb"
#4.4 Borrar todo y volver a empezar
#Crear un material llamado Proton, Neutron y Electron
radio_proton=0.1
rnd=random.random
def run(f,to):
    CARPETA="/home/cinder/Documentos/atomos/"
    for i in range(f,to+1):
        #3.1
        radio_nuclear=0.1#Debatible
        #Crear protones y asignarles materiales
        #TODO: Encapsular en una funcion, blender se enoja con los for anidados
        for a in range (1,i): #Para atomos pequeños con numatom<13, es mejor hacer el nucleo a mano
            A1=rnd()
            A2=rnd()
            R=radio_nuclear
            #convertir de coordenadas esfericas a rectangulares
            xp=R*(math.sin(2*math.pi*A1))*(math.cos(2*math.pi*A2))
            yp=R*(math.sin(2*math.pi*A1))*(math.sin(2*math.pi*A2))
            zp=R*(math.cos(2*math.pi*A1))
            name=f"proton_{a}"
            createSphere(name,xp,yp,zp,1.5,radio_proton,"Proton")
            A1=rnd()
            A2=rnd()
            R=radio_nuclear
            #convertir de coordenadas esfericas a rectangulares
            xp=R*(math.sin(2*math.pi*A1))*(math.cos(2*math.pi*A2))
            yp=R*(math.sin(2*math.pi*A1))*(math.sin(2*math.pi*A2))
            zp=R*(math.cos(2*math.pi*A1))
            name=f"neutron_{a}"
            createSphere(name,xp,yp,zp,1.5,radio_proton,"Neutron")
        electrones(i)
        export_objects(CARPETA,f"atomo_{i}.glb")
        #Borrar todo
        for a in range (1,i):
            delete(f"proton_{a}")
            delete(f"neutron_{a}")
            delete(f"electron_{a}")
            delete(f"orbital_{a}")
run(1,1)
