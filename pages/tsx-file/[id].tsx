export default defineComponent({
  setup () {
    definePageMeta({
      title: 'TSX File',
      name: 'tsx file',
      middleware: ['guard']
    })

    useSeoMeta({
      title: 'Amazing tsx file'
    })

    const route = useRoute()
    return (): JSX.Element => (
      <div>{`tsx ${route.params.id}`}</div>
    )
  }
})
