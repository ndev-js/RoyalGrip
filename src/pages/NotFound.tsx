import ButtonLink from "../components/ui/ButtonLink";

const NotFound = () => (
  <section className="bg-page py-28 lg:py-40">
    <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
      <p className="text-7xl font-extrabold tracking-tight text-orange-500">404</p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-heading">This page has sprung a leak.</h1>
      <p className="mt-4 text-base leading-relaxed text-body">
        The page you are looking for has moved or never existed. Try one of these instead.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/" arrow>Back to home</ButtonLink>
        <ButtonLink to="/products/" variant="outline">Browse products</ButtonLink>
      </div>
    </div>
  </section>
);

export default NotFound;
