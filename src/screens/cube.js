import React from 'react';
//import Expo from 'expo';
import { View, Text, StyleSheet } from 'react-native';
//import {Scene, Mesh, MeshBasicMaterial, PerspectiveCamera, BoxBufferGeometry} from 'three';
//import ExpoTHREE, {Renderer} from 'expo-three';
//import {ExpoWebGLRenderingContext, GLView} from 'expo-gl';

export const Cube = () => {
  /*
  const onContextCreate = async (gl)=>{


    const scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth/gl.drawingBufferHeight,
      0.1,
      1000
    )

    gl.canvas = {width:gl.drawingBufferWidth, height:gl.drawingBufferHeight}
    camera.position.z = 2

    const renderer = new Renderer({gl})
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const geometry = new BoxBufferGeometry(1,1,1)
    const material = new MeshBasicMaterial({
      color:'green'
    })
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    const render = () => {
      requestAnimationFrame(render)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene,camera)
      gl.endFrameEXP()
    }

    render()
  } 
 */

  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Tässä kuuluisi näkyä pyörivä 3d-kuutio</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
      backgroundColor: "aqua",
      height: 900
  },
  txt: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "teal",
      marginTop: 10,
      marginBottom: 15
  },
})

export default Cube;

/*
Alkuperäinen return()-sisältö:
<View>
  <GLView
    onContextCreate = {onContextCreate}
    style = {{width:500, height:500}}
  />
</View>
*/