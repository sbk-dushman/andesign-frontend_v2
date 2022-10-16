export default async ({ store }) => {
  await store.dispatch('getPages')
  await store.dispatch('getMainPage')
}
