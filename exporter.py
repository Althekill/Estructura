#Script de la API de blender para importar archivos en formato glb y exportarlos a formato obj

import bpy
import bmesh
import os
import random
import math



def import_export(path):
    
    bpy.ops.import_scene.gltf(filepath=path)
    export_path=path[0:-4] + ".obj"#quita el .glb y lo reemplaza por .obj
    bpy.ops.export_scene.obj(filepath=export_path)
def importGlb_exportFbx(path,export_path):
    bpy.ops.import_scene.gltf(filepath=path)
    bpy.ops.export_scene.fbx(filepath=export_path)
def delete ():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
        
p="/mnt/Seagate/S/VirtualBox/Porque no hay de otra/Archivos compartidos/Tutorial/firebase/public/static/Modelos/"     
e="/media/cinder/Database.005/Unity/Projects/AR Estructura/Assets/Modelos FBX/"     
w =os.listdir(p)
for object in w:
    if (object[-3:]=="glb"):
        if f"{object[-3:]}fbx" in w:
            continue
        importGlb_exportFbx(p+object,f"{e}{object[:-3]}fbx")
        delete();
