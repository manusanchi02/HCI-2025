import { createWebHashHistory, createRouter } from 'vue-router'
import { isTutorialCompleted } from '../utils/storage'

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
import Tutorial1View from '../views/tutorial/tutorial1View.vue'
import Tutorial2View from '../views/tutorial/tutorial2View.vue'
import Tutorial3View from '../views/tutorial/tutorial3View.vue'
import Tutorial4View from '../views/tutorial/tutorial4View.vue'
import Tutorial5View from '../views/tutorial/tutorial5View.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tutorial1', component: Tutorial1View },
  { path: '/tutorial2', component: Tutorial2View },
  { path: '/tutorial3', component: Tutorial3View },
  { path: '/tutorial4', component: Tutorial4View },
  { path: '/tutorial5', component: Tutorial5View },
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

router.beforeEach((to, from, next) => {
  // Se l'utente sta navigando verso la home e il tutorial non è stato completato
  if (to.path === '/' && !isTutorialCompleted()) {
    next('/tutorial1')
  } else {
    next()
  }
})

export default router