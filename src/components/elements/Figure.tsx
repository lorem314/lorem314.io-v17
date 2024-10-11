const Figure = ({
  src,
  title,
  id,
}: {
  src: string
  title?: string
  id?: string
}) => {
  return (
    <figure className="my-4" id={id ? `图片${id}` : undefined}>
      <img
        className="mx-auto"
        width="auto"
        src={src}
        alt={`图片${id ? ` ${id}` : ""}${title ? ` ${title}` : ""}`}
      />
      {title ? (
        <figcaption className="text-center mt-1 text-neutral-500">
          {id ? `图片 ${id} ` : null} {title}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default Figure
