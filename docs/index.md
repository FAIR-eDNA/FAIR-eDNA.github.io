# Making eDNA FAIR

<div align="center">
    <img src="/assets/images/ednafair_logo.png" alt="logo" width="70%">
</div>

## Project scope

Environmental DNA (eDNA) has emerged as a powerful biomonitoring tool for species detection and distribution mapping, with a remarkable surge in activity over the past decade. While millions of DNA sequences are often generated and assigned to taxa in each investigation, the scattered storage and inconsistent formats of these records render the data non-machine readable and challenging to reuse and integrate with similar datasets. FAIR (Findable, Accessible, Interoperable, Reusable) eDNA data has vast potential to revolutionise environmental measurement. For example, it will allow us to conduct biomonitoring and species distribution modelling studies across expansive spatial and temporal scales, which are often logistically challenging or unattainable for individual projects. It could also illuminate “dark” (unassigned) DNA sequences by facilitating their storage and re-analysis with expanding DNA reference databases. The potential for progressive post-hoc improvement is a unique feature of eDNA data. However, several challenges exist. These include a lack of awareness of FAIR data values and practices within eDNA research communities, the absence of clear guidelines for how to maximise FAIRness of individual datasets, and insufficient time (real and perceived) for formatting and publishing data in a FAIR manner. Furthermore, even when data conform to major standard vocabularies like Darwin Core (DwC) and Minimum Information about any (x) Sequence (MIxS), they often consist of free-text fields, hindering automated processing and dataset integration. In response to these challenges, we present best practices for formatting and publishing eDNA data. Our approach involves publishing raw sequences, operational taxonomic unit (OTU) tables, and metadata tables providing detailed information about each unique sequence, identified taxon and sample. Drawing from DwC and MIxS, we employ controlled vocabularies and introduce additional fields designed to accommodate unique properties of eDNA data. Our goal is to transform the eDNA data lifecycle and to encourage seamless data mobilisation, mining, quality filtering, and facilitating reuse and reanalyses. 

<!-- 
<div align="center">
    <embed src="/assets/images/fairedna_infographic.pdf#toolbar=0&navpanes=0" width="600px" height="465px"></embed>
    <p style="margin-top: 0em">Designed by: <a href="https://ooidscientific.com">OOID Scientific</a></p>
</div>
 -->
<div align="center">
    <img src="/assets/images/fairedna_infographic.jpg" alt="FAIR eDNA infographic" width="90%">
    <figcaption style="margin-top: 0em">Designed by: <a href="https://ooidscientific.com">OOID Scientific</a></figcaption>
</div>

## Why do we need FAIR eDNA?
Escalating global loss of biodiversity by factors such as habitat destruction, spread of invasive species, climate change, and pollution highlights the urgent necessity for robust and real-time monitoring initiatives [reference]. In response to these challenges, environmental DNA (eDNA) has emerged as a cutting-edge scientific technique, enabling the collection and analysis of genetic material shed by organisms into their surrounding environment including water, soil and air [reference]. Its application in environmental monitoring is increasingly recognised for its efficacy in providing valuable insights into ecological and environmental dynamics (Takahashi et al., 2023. More reference). 

Tremendous amount of DNA sequences is typically produced and assigned to taxa in individual eDNA studies. Most of these data are stored in various locations and formats (Berry et al 2020), thus they are invisible to scientists and other potential users, remain underutilised and eventually get lost – termed “dark data” by Heidorm (2008). This is a lost opportunity of such valuable, rich biodiversity data to be reused and recycled and generate further knowledge for larger scale questions.

The values of open, FAIR (findable, accessible, interoperable, reusable) data are well advocated in all science fields including ecology (i.e. Wilkinson et al 2016, Hampton et al 2013, Jenkins et al. 2023, Bech et al, Sholler et al 2019, Gomes et al. 2022). These include the transparency and reproducibility of studies, long-term values of data and generation of further knowledges at speed. For example in the eDNA field, FAIR data will enable us to conduct biodiversity monitoring and species distribution modelling studies more effectively at large scales which is logistically difficult or impossible for individual projects. It can also facilitate early invasive species detection for biomonitoring. Giribet et al (2023) identified a micrometazoan specie far from its known localities, firstly via eDNA samples unexpectedly, followed by an expedition planned to visually confirm it. This example can be followed by using archived eDNA dataset and implement early alert systems of invasive species detections across the world. 

In eDNA taxonomic assignment procedures, DNA sequences are assigned to taxa using DNA reference database. With the absence of comprehensive reference database, they can be misclassified, classified at higher taxonomic levels (i.e. genus and families), or unassigned to any taxa within the identify matching thresholds. Taxonomic assignments of archived sequences can be improved by periodically re-analysing them using the updated reference database, given there have been ongoing efforts to establish comprehensive databases across the world (Delrieu-Trottin et al 2023, Weigand et al 2019, Stoeckle et al 2020). All these above examples will generate critical knowledge and support data-driven management, amplifying the power of eDNA beyond what it can currently provide us.

