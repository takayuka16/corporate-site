import { createRouter, createWebHistory } from "vue-router";
import TopPage from "../views/TopPage.vue";
import NewsPage from "../views/NewsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import AboutPage from "../views/AboutPage.vue";
import BusinessPage from "../views/BusinessPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "TopPage",
      component: TopPage,
    },
    {
      path: "/news",
      name: "NewsPage",
      component: NewsPage,
    },
    {
      path: "/company",
      name: "Companypage",
      component: CompanyPage,
    },
    {
      path: "/contact",
      name: "ContactPage",
      component: ContactPage,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
    },
    {
      path: "/business",
      name: "BusinessPage",
      component: BusinessPage,
    },
  ],
});

export default router;
