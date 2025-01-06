import { BackgroundGradientAnimation } from '@/components/ui/GradientBg'
import React from 'react'
import { VscGithub } from 'react-icons/vsc'

const Discover = () => {
  return (
    <BackgroundGradientAnimation>
    <div className="p-12 z-10">
      <div className="h-[60px] p-4 mt-4"></div>
      <h3 className="text-3xl font-bold">
        Discover the projects I&apos;ve brought to life.
      </h3>
      <div className="pt-6 flex items-center justify-center">
        <VscGithub size={240} className="text-white/30"/>
      </div>
    </div>
  </BackgroundGradientAnimation>
  )
}

export default Discover