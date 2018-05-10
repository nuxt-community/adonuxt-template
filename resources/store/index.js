export const state = () => ({
  sidebar: false,
  navigation: [
    { icon: 'apps', title: 'Welcome', to: '/' },
    { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
