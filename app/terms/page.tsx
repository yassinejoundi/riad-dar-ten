export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Terms of Service
          </h1>
          <p className="font-sans text-gray-600 mb-8">
            These Terms of Service outline the conditions under which you may
            use our website and stay at Riad Dar Ten.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 font-sans text-gray-700 text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              1. Scope of these Terms
            </h2>
            <p>
              By using this website or making a reservation with Riad Dar Ten,
              you agree to be bound by these Terms of Service. If you do not
              agree, please do not use the site or submit a booking request.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              2. Reservations and Confirmations
            </h2>
            <p>
              Reservation requests sent through this website, email, or other
              channels are subject to availability and approval. Your booking is
              confirmed once you receive a written confirmation from us, which
              may include specific payment or deposit conditions.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              3. Rates, Payments, and Taxes
            </h2>
            <p>
              Rates communicated to you at the time of booking are quoted per
              room and per night unless otherwise stated, and may include or
              exclude local taxes and fees. You are responsible for all
              applicable taxes, city taxes, or other mandatory charges under
              local law.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              4. Cancellations and No-Shows
            </h2>
            <p>
              Cancellation conditions are communicated during the booking
              process and in your confirmation. Depending on the rate and dates,
              late cancellations or no-shows may incur partial or full charges
              of the reserved stay. Please review the conditions carefully when
              confirming your reservation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              5. Guest Responsibilities
            </h2>
            <p>
              Guests are expected to respect the property, fellow guests, and
              neighbors, and to comply with our house rules, including
              guidelines regarding noise, smoking, and the use of shared areas.
              You are responsible for any damage caused by you or members of
              your party during your stay.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              6. Check-in, Check-out, and Access
            </h2>
            <p>
              Standard check-in and check-out times will be provided with your
              booking. Early check-in or late check-out is subject to
              availability and may incur additional charges. For security
              reasons, only registered guests are permitted to stay overnight at
              the riad.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              7. Liability
            </h2>
            <p>
              While we take great care to provide a safe and enjoyable stay, Riad
              Dar Ten is not liable for loss, theft, or damage to personal
              belongings, nor for events beyond our reasonable control, such as
              strikes, travel disruptions, or extreme weather. We recommend that
              guests obtain appropriate travel insurance.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              8. Website Use and Content
            </h2>
            <p>
              The content on this website is provided for general information
              and marketing purposes. We make reasonable efforts to keep
              information accurate but do not guarantee that descriptions,
              images, or availability are error-free or always up to date.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              9. Privacy
            </h2>
            <p>
              The way we collect and handle personal data is described in our{" "}
              <a
                href="/privacy"
                className="text-primary underline underline-offset-2 hover:text-terracotta"
              >
                Privacy Policy
              </a>
              . By making a reservation, you acknowledge that you have read and
              understood this policy.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. The
              version published on this website at the time of your booking or
              stay will generally apply to that stay, unless otherwise required
              by law.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary mb-3">
              11. Contact and Applicable Law
            </h2>
            <p className="mb-3">
              If you have questions about these Terms of Service, please contact
              us using the details below.
            </p>
            <p>
              Riad Dar Ten
              <br />
              10 derb Moulay El Ghali (Lakssour, Médina)
              <br />
              40000 Marrakech, Morocco
              <br />
              Email: info@riaddarten.com
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              These Terms are governed by the laws of Morocco, without
              prejudice to any mandatory protections that may apply under the
              laws of your country of residence.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

