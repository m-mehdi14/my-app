"use client"


import React from 'react'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Feature from './Feature';
import Grid from './Storygrid';
import Page from './StoryPage';
import Teaser from './Teaser';
 
const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
  };
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "jrs3tuQzp4LHIlRTEI4uDwtt",
  use: [apiPlugin],
  components: components
});

const StoryBlokProvider = ({children}:{
    children : React.ReactNode
}) => {
  return children;
}

export default StoryBlokProvider