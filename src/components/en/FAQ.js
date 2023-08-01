import React from "react";

const FAQ = () => {
  return (
    <div>
      <div>
        <section class="text-primary">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="h2 mb-6 xl:mb-12">Frequently Asked Question</h1>
              <p class="lead text-center ">
                All the frequently asked questions from customers are here.
                Please contact us directly if you have any other questions.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How many days to finish the work?
                  </summary>

                  <span>
                    Normally, data processing can be completed within 2-4 days
                    because there is a queue. But if it's really urgent that you
                    have to finish the next day, we can prepare an express
                    package for you.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Is the result of data processing really accurate?
                  </summary>

                  <span>
                    Of course!!! Our team is led by statisticians graduated from
                    the US reputable universities who are used to dealing with
                    clients from all across the globe!
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Will you teach me how to process the data?
                  </summary>

                  <span>
                    Of course we can! After you send us the data, we will invite
                    you within 2-4 days to a meeting. We will teach you how to
                    process the data from the beginning to how to read it!
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What if the results are not as expected?
                  </summary>

                  <span>
                    We will help you find the right method according to your
                    data conditions. We will not either manipulate data nor
                    change any data because it's not allowed, right? Instead, we
                    will help you find justifications that you can be super
                    ready during the thesis defense
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What if there is a revision? Should I pay again or not?
                  </summary>

                  <span>
                    You will get FREE minor revisions. Unless there is a
                    complete change from the start (it can be the change of the
                    data or research objectives), there will be a charge of the
                    agreed price
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What statistical applications does Firstat serve?
                  </summary>

                  <span>
                    We can help analyze your data with any statistical program,
                    from SPSS, R, Python, SmartPLS, MPlus, EVIEWS, SAS, STATA.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can we meet in-person?
                  </summary>

                  <span>
                    We are based in Indonesia. Please let us know if you want to
                    consult with our team while also enjoying the holiday. Or
                    maybe if our team is traveling in your city and you want to
                    consult, of course we can meet.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How to order?
                  </summary>

                  <span>
                    <div class="flex flex-col space-y-4">
                      <p class="text-lg font-medium">
                        How to Start a Data Analytics Project
                      </p>
                      <ol class="list-decimal list-inside space-y-2">
                        <li>
                          Contact our contact via WhatsApp, telephone, or email
                          us.
                        </li>
                        <li>
                          Free consultation to find out if your project is
                          possible for us to work on
                        </li>
                        <li>
                          You will be asked to submit chapters 1,2 and 3 or at
                          least a research hypothesis and data se
                        </li>
                        <li>You make 50% of the payment</li>
                        <li>The analysis process will take 1 - 3 days</li>
                        <li>
                          The results of the analysis will be conveyed or
                          discussed through meetings (online/offline)
                        </li>
                        <li>You do the remaining 50% of the payment</li>
                        <li>
                          Once payment has been received, results, reports and
                          attachments will be emailed
                        </li>
                      </ol>
                    </div>
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What's the payment method?
                  </summary>

                  <span>
                    For now we only use bank transfer as a payment method. You
                    can pay 50% at the beginning when we have a deal, and you
                    can pay the remaining 50% after you get the results.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
