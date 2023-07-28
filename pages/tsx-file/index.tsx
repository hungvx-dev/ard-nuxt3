export default defineComponent({
  setup () {
    return (): JSX.Element => (
      <div>
        {Array.from({ length: 2 }).map((_, index) => (
          <li key={index}>
            <NuxtLink to={`tsx-file/${index + 1}`}>
              {index + 1}
            </NuxtLink>
          </li>
        ))}
      </div>
    )
  }
})
