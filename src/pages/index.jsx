import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Html, Loader, Bounds } from '@react-three/drei';

import React, { useState, useEffect, useRef } from "react";

import Header from '@/components/base/Header/';
import HomeFooter from '@/components/base/Footer/Home';
import NavFooter from '@/components/base/Nav/';

const IslandModel = dynamic(() => import('@/components/canvas/IslandModel/').then((mod) => mod.default), {
  ssr: false,
})


const Page = () => {
  return (
    <>
      <Header />
      <NavFooter />
      <HomeFooter />
    </>
  )
}

const ModelPage = (props) => {

  return (
    <>
      <IslandModel />
      {/* <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <IslandModel assetID={'hi'}></IslandModel>
        <Bounds fit clip observe={isPortrait ? true : false} margin={1.2}>
          <IslandModel assetID={'hi'}></IslandModel>
        </Bounds>
      </Suspense> */}
    </>
  )
}

Page.r3f = ModelPage

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}
