const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className="flex justify-center items-center align-bottom mb-6 mt-52">
      © {year}. Cleanzy Corp. Todos los derechos reservados.
    </div>
  )
}

export default Footer