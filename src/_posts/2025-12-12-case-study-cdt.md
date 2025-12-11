---
layout: blog_post
title: "Case Study: Strengthening California’s Digital Disaster Recovery"
subtitle: "Supporting the California Department of Technology During the 2025 Wildfire Emergency"
description: "Supporting the California Department of Technology During the 2025 Wildfire Emergency"
author: Milo Green
excerpt: "Supporting the California Department of Technology During the 2025 Wildfire Emergency"
date: 2025-12-12 00:00:00 +0000
categories:
  - compiler
---

In January 2025, a series of catastrophic wildfires swept across Los Angeles, devastating communities and disrupting essential public services. More than 15,000 structures were destroyed, hundreds of thousands of residents were forced to evacuate, and at least 31 lives were lost. As the state mobilized to respond, the California Department of Technology (CDT) moved quickly to ensure residents could still access vital digital services during the crisis.

One of the state’s priorities was delivering clear, timely, and accurate information to residents who had lost homes, belongings, and critical documents. The Los Angeles Fires website ([ca.gov/LAfires](https://www.ca.gov/LAfires)) was launched as a Digital Disaster Recovery Center (DDRC), a central hub where Californians could find assistance. Among the most requested resources were vital records such as birth, marriage, and death certificates, essential for rebuilding daily life after the fires.

To meet this urgent need, CDT engaged Compiler to support its Digital Identity (D-ID) team. The goal: build a secure, scalable application that would leverage the California Identity Framework to allow disaster-affected residents to request replacement vital records entirely online.

Having recently partnered with CDT on [the Cal-ITP Benefits project](https://benefits.calitp.org/help), Compiler was already familiar with the agency’s infrastructure and workflows, allowing us to mobilize within days. Our team provided both technical implementation and strategic support, ensuring that CDT’s digital recovery systems could operate reliably during an emergency while laying the groundwork for a more resilient statewide digital ecosystem in the face of future disasters.

**The Challenge**

CDT needed to quickly expand its digital infrastructure to support a new use case for identity verification and automate eligibility for recipients of the vital records fee waivers. With thousands displaced and essential services under pressure, the challenge was to stand up a secure online process, without overburdening existing systems or slowing down emergency response.

Our goal was to leverage the CA Digital IDentity Framework to facilitate safe and secure online service delivery. More specifically, we were to develop an application that would allow a disaster-affected Californian to complete their application for a free replacement birth certificate, marriage certificate, or death certificate issued by the California Department of Public Health (CDPH) completely online. Prior to this project, CDPH only accepted notarized paper applications from disaster-impacted residents.

Working alongside CDT, the CDPH, and the Office of Data and Innovation (ODI), Compiler helped design a solution that would integrate with existing infrastructure while providing a smoother, faster experience for residents seeking free replacement vital records.

**Our Approach**

Compiler and CDT adopted a phased, collaborative approach focused on rapid deployment and human-centered design.

- **Stakeholder Alignment:** We brought together CDT, CDPH, and ODI to align on shared goals and workflows across infrastructure, service delivery, and user experience.
- **Rapid Prototyping:** Within days, we developed a prototype using the CA IdG to validate technical assumptions and demonstrate feasibility.
- **Discovery & Research:** We mapped the existing request process, identifying pain points such as inconsistent eligibility checks and offline requirements. Highlighted friction points around access to printers and the delays associated with the required notarization of paper forms.
- **Agile Development:** Working in two-week sprints, Compiler and CDT launched the Birth Records Request Flow in June 2025, followed by Marriage Records in September and Death Records in October.
- **Operations & Roadmap:** After launch, we helped establish monitoring and analytics, and authored a report highlighting learnings and opportunities for readiness for future disaster deployments.

Beyond technical delivery, Compiler served as a strategic partner, advising CDT on architecture, user experience, workflow design, and long-term budget planning to ensure this emergency response could evolve into a sustainable, scalable service model.

**The Results**

Together with CDT, Compiler delivered a secure, user-friendly application that enables disaster-affected Californians to request vital records online, reducing barriers to recovery and strengthening the state's capacity for digital emergency response.

Key outcomes included:

- **Reduced time to apply from weeks to days:** Residents impacted by the fire can now use the new online application to submit in minutes. The previous process required mailing completed paper forms and a notary’s signature, which could take weeks for residents who are already struggling to get back on their feet. Additionally, applicants no longer need to take on the costs for printing, mailing, and notary services.
- **Reduced time to process applications:** Auditing process and interviewing front-line staff informed the design of form fields to guide applicants to successfully submit compliant forms – staff no longer need to return to applicants to get clarifying information, which previously slowed down the review process. Time savings were also realized by moving from handwritten forms to clearly legible typed answers.
- **Reduced to time deploy:** Building on top of the California Identity Gateway (IdG), this is the second-ever production app to leverage the California Digital Identity Framework. Built as an open source application, designed with reusable, scalable architecture, creating a foundation for both future disaster recovery applications and everyday modern digital services. This use case added address verification as a new eligibility verification type, expanding the capabilities of the CA IdG. Actionable learnings were deliverable as a report to strengthen readiness for future disaster deployments.

This work demonstrated how agile, mission-driven technology partnerships can make government digital services more resilient, especially when residents need them most.

**Learn More:**

- Sprint Board: [github.com/orgs/compilerla/projects/6/views/12](http://github.com/orgs/compilerla/projects/6/views/12)
- Code Repository: [github.com/Office-of-Digital-Services/cdt-ods-disaster-recovery](https://github.com/Office-of-Digital-Services/cdt-ods-disaster-recovery)
