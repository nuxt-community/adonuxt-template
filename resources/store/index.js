export const state = () => ({
  sidebar: false,
  navigation: [
    { icon: 'apps', title: 'Welcome', to: '/' },
    { icon: 'bubble_chart', title: 'About', to: '/about' }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
