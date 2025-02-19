export default [
  {
    path: '/',
    name: 'Home', // Add a name for RouterLink usage
    component: () => import('@/views/Home.vue'),
  }
];
