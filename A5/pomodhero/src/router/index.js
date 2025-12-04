import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MarketView from '../views/MarketView.vue'
import ChatView from '../views/ChatView.vue'
import ChatListView from '../views/ChatListView.vue'
import DayDetails from '../views/DayDetailsView.vue'
import MarketDetailsView from '../views/MarketDetailsView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'
import LoginView from '../views/LoginView.vue'
import NewRecipeView from '../views/NewRecipeView.vue'
import UnexpectedView from '../views/UnexpectedView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/market', component: MarketView},
  { path: '/chat/:username', name: 'ChatView', component: ChatView, props: true},
  { path: '/chat-list', component: ChatListView},
  { path: '/day-details/:weekDay?/:dayNumber?/:month?', name: 'DayDetails', component: DayDetails, props: true},
  { path: '/market-details', name: 'MarketDetailsView', component: MarketDetailsView},
  { path: '/recipe-details/:id', name:'RecipeDetails', component: RecipeDetailsView, props: true},
  { path: '/login', component: LoginView},
  { path: '/profile', component: ProfileView},
  { path: '/new-recipe/:day/:meal/:method', name: 'NewRecipe', component: NewRecipeView, props: true },
  { path: '/unexpected/:recipe' , name: 'UnexpectedView', component: UnexpectedView, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router