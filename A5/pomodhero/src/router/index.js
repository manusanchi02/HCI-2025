import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MarketView from '../views/MarketView.vue'
import ChatView from '../views/ChatView.vue'
import ChatListView from '../views/ChatListView.vue'
import DayDetails from '../views/DayDetails.vue'
import MarketDetailsView from '../views/MarketDetailsView.vue'
import RecipieDetails from '../views/RecipieDetails.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/market', component: MarketView},
  { path: '/chat', component: ChatView},
  { path: '/chat-list', component: ChatListView},
  { path: '/day-details', component: DayDetails},
  { path: '/market-details', component: MarketDetailsView},
  { path: '/recipie-details', component: RecipieDetails},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router