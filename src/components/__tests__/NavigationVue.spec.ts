import { mount, VueWrapper } from '@vue/test-utils'
import NavigationVue from '../Home/Nav/NavigationVue.vue'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { PathApp, ThemeApp } from '@/enum/enum'

const createWrapper = () => {
  return mount(NavigationVue)
}

describe('Nav Component', ()=>{
  let wrapper: VueWrapper<any>
  beforeEach(() =>{
    wrapper = createWrapper()
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('render correct component', () => {
    wrapper = mount(NavigationVue)
    expect(wrapper.exists()).toBe(true)
  })
   
  it('button trigger function', ()=>{
    wrapper = mount(NavigationVue)
    const button = wrapper.find(".ul_button")
    const navigation = wrapper.find(".header")
    button.trigger("click")
    expect(navigation.attributes("id")).toBe(ThemeApp.light)
  })
  it('render a link with the correct route', () => {
    wrapper = mount(NavigationVue)
    const routerLink = wrapper.find(".ul_link") 
    expect(routerLink.attributes('to')).toEqual(PathApp.main)
  })
})

