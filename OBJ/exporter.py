import bpy
import bmesh
import os
import random
import math



def import_export(path):
    
    bpy.ops.import_scene.gltf(filepath=path)
    export_path=path[0:-4] + ".obj"#quita el .glb y lo reemplaza por .obj
    bpy.ops.export_scene.obj(filepath=export_path)

def delete ():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
        
p="/home/cinder/Documentos/atomos/"        
w =os.listdir(p)
for object in w:
    if (object[-3:0]=="glb"):
        if f"{object[-3:0]}obj" in w:
            continue
        import_export(p+object)
        delete();
