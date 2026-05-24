import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl border-t border-zinc-200 px-4 py-16 sm:px-6 dark:border-zinc-800"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      >
        Contact
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Have a project in mind? Send a message and I&apos;ll get back to you.
      </p>
      <ContactForm />
    </section>
  );
}
