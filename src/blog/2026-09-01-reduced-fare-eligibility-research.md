---
title: "Reduced fares and disability in public transit"
subtitle: "What we learned about reduced fare eligibility after reviewing 20 application forms and talking to transit providers and riders with disabilities"
description: "What we learned about reduced fare eligibility after reviewing 20 application forms and talking to transit providers and riders with disabilities"
author: Christine Bath
excerpt: "What we learned about reduced fare eligibility after reviewing 20 application forms and talking to transit providers and riders with disabilities"
date: 2026-09-01T00:00:00+0000
categories:
  - compiler
---

Most public transit systems offer a reduced fare of 50% or more to people with disabilities as a condition of their federal funding. These benefits are often a lifeline to people with disabilities who disproportionally have less income and rely on public transit more to navigate their daily lives.

But as transit providers modernize their payment technology and customer interactions, integrations for reduced fare programs often lag behind. Contactless payments are becoming common for full-fare riders, but reduced fares riders are often limited to cash or reloadable, closed loop transit cards. People with disabilities routinely encounter paper forms, in-person requirements, and long wait times to get reduced fares. This creates a set of interrelated technology gaps for how to extend contactless, open loop payments to reduced fare riders and how to check identity and benefit eligibility digitally without extra paperwork.

Compiler has partnered with the California Department of Technology and Caltrans to bridge these gaps with [Cal-ITP Benefits](https://www.camobilitymarketplace.org/rider-benefits/). The platform lets riders apply for reduced fares online with a digital identity and eligibility check, then maps their benefits to a bank card so they get reduced fares when they tap. Cal-ITP Benefits lets providers offer tap to pay reduced fares with opt-in eligibility policies for seniors, Medicare cardholders, U.S. Veterans, and people with low income.

We wanted to understand what it would take to extend the platform to people with disabilities and create a common eligibility policy for multiple providers. To do this, we spoke with front-line staff at transit providers, interviewed people with disabilities who currently use reduced fare programs, and reviewed 20 application forms.

## Federal requirements and local standards

Federally subsidized transit providers are required to offer reduced fares to seniors, Medicare cardholders, and people with disabilities under the [Federal Transit Act](https://www.transit.dot.gov/are-transit-providers-required-offer-reduced-transit-fares-seniors-people-disabilities-or-medicare). The requirement for people with disabilities is defined broadly as:

> “individuals who, by reason of illness, injury, age, congenital malfunction, or other permanent or temporary incapacity or disability, including those who are nonambulatory wheelchair-bound and those with semi-ambulatory capabilities, are unable without special facilities or special planning or design to utilize mass transportation facilities and services as effectively as persons who are not so affected.”
>
> \- [Appendix to 49 CFR part 609](https://www.gpo.gov/fdsys/pkg/CFR-2005-title49-vol7/pdf/CFR-2005-title49-vol7-part609-appA.pdf)

To meet this requirement, transit providers create eligibility criteria and forms locally. Most often, riders provide a letter from a medical professional stating a person has a qualifying condition, or proof that they receive other benefits related to their disability.

Today, Cal-ITP Benefits supports two of the three FTA-required reduced fare groups. Seniors and Medicare cardholders can use Cal-ITP Benefits to get reduced fares with age and enrollment checks through Login.gov and Medicare.gov. However, eligibility for people with disabilities is significantly more complex and varied.

## What documentation is accepted

To scope a digital eligibility check, we need to know what kind of documentation providers typically accept. The most common kinds of documentation we saw used to qualify people with disabilities for reduced fares included:

- Medicare cards ([Medicare covers some people with disabilities](https://www.ssa.gov/disabilityresearch/wi/medicare.htm) in addition to seniors)
- Medical certification forms or letters from a medical professional
- Proof of disabled U.S. Veteran status (e.g. A “Service Connected” ID, VA letter/claim number)
- Having disabled plates or a disabled placard from the DMV
- Proof they receive SSI/SSDI benefits
- Having another transit agency’s reduced fare card
- Having another transit agency’s paratransit card
- Letters from a disability organization (e.g. Braille Institute Card)

This shows a mix of federal, state, and local benefits used to qualify people with disabilities for reduced fares. Some have existing data sources that could potentially be used for a digital eligibility check, like disabled U.S. Veteran status or a California DMV disabled placard. But others are much more manual and are not issued or maintained by centralized agencies, like letters from medical professionals.

## Varied access requires a varied policy

Disability is varied and complex, and so is access to benefit programs. We talked to many individuals who get reduced fares but had different levels of access to other benefit programs. For example:

- A wheelchair user who uses paratransit and a DMV placard, but doesn’t get SSI/SSDI or Medicare
- A person navigating a recent qualifying diagnosis who is pursuing, but not yet approved for, state disability or SSI/SSDI
- A person with a lifelong visual impairment who gets SSI

We quickly learned that to serve people with disabilities, eligibility can’t be limited to programs with digital verification checks. Getting access to benefits like SSDI or disabled U.S. Veteran status requires significant time and effort.

Medical certification forms are an essential path to get reduced fares quickly while navigating other benefit programs. All the people with disabilities we interviewed used medical certification forms to get their benefits, and similarly many transit providers we interviewed said this was the most common documentation they receive.

Our policy will need to consider that not everyone can access benefits with a digital check, and in-person points of entry are needed to offer a complete eligibility experience.

## Medical certification form variety

We found medical certification forms can vary greatly from one provider to the next, particularly for:

- Who can fill out the form
- Level of disclosure and detail needed about a person’s condition
- How qualifying conditions are defined

<figure>
  <img src="/assets/blog/2026/medical-certification-forms-collage.jpeg" alt="A collage of medical certification form questions">
  <figcaption>Examples of the questions and form patterns healthcare providers and people with disabilities encounter at different transit providers.</figcaption>
</figure>

Some forms ask medical providers to quickly confirm a person meets a broad disability category, like a physical disability, while others ask for a detailed write up of the specifics of a diagnosis and how it affects the person’s ability to use transit. Providers also have varying definitions for conditions that commonly qualify. For example, hearing impairments or deafness is typically a qualifying condition, but providers define these conditions differently.

| Agency            | Definition                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Santa Barbara MTD | Hearing impairments: Total deafness includes persons whose hearing loss is 70 dba or greater in the 1000 and 2000 Hz ranges.                                                                                                   |
| MST               | Hearing disabilities: This section includes those persons with a 50% bilateral hearing loss, which is uncorrectable by use of a hearing aid.                                                                                   |
| SacRT             | HEARING: Persons who have total deafness or are unable to hear with the aid of an assistance device on the level that meets the standards of the American National Standards Institute (ANSI), as determined by an audiometer. |
| Chicago RTA       | Hard of hearing or deaf                                                                                                                                                                                                        |

Every form requires a team to maintain it and store the sensitive PII that’s collected. This research suggests there’s an opportunity to develop standardized open source forms for easier maintenance and less data risk for both riders and providers.

## How we’re taking this work forward

More transit providers are using Cal-ITP Benefits to administer tap to pay reduced fares and offer secure, self-service enrollment options to riders. This research allowed us to see a future where we could extend the platform to cover all FTA-required reduced fare groups through:

- Expanded digital eligibility checks
- Investigating standardized, open source forms for transit providers with fewer resources
- Offering a mix of self service and in-person enrollment pathways

We are continuing to work with our partners to extend the platform further. You join the [Cal-ITP Benefits newsletter](https://docs.calitp.org/benefits/reference/newsletter-archive/) for product updates and can [follow our work on Github](https://github.com/cal-itp/benefits).

## About Compiler

_Compiler is a woman-owned software consultancy built by people who use and rely on public systems every day. We partner with government agencies and mission-driven organizations to design, build, and sustain digital services that work better for everyone. Our team combines human-centered design, data expertise, and modern engineering practices to help agencies deliver accessible, maintainable, and equitable digital tools._

_If you’d like to learn more about Compiler’s work on Cal-ITP Benefits or partner with us on a new project, we’d love to talk. Email [hello@compiler.la](mailto:hello@compiler.la) to get started._
