# eDNA FAIR guidelines


## Data types and formats
Each eDNA study generates multiple types of data, including metadata, DNA sequences, and raw (non-curated) and curated OTU/ASV tables. 

The list below and Figure 2 outline the structure and contents of each datatype that are required to be submitted for FAIR eDNA data.

1. **Study information table**: Information that applies to a whole study and dataset. This includes a project name, bibliographic reference for the resources, and workflows at PCR, sequencing, and bioinformatics steps.
2. **Sample metadata**: Detailed information for each sample, including sampling date, location and method, and environmental variables (i.e. temperature, water depth)
3. **Raw OTU/ASV table**: Pre-curated OTUs/ASVs and read counts, including those of contamination, non-targeted taxa and control samples 
4. **Curated OTU/ASV table**: OTU/ASV, read counts and assigned taxa (collapsed taxa in some cases) after data curations, which were relevant for the study scopes and were used for the downstream ecological analyses in the study 
   - Purpose: To allow prompt re-uses of species occurrence records in future studies
5. **DNA sequence metadata**: DNA sequences with associated OTU/ASV ID, assigned taxa (could be multiple hits), taxonomic assignment QA parameters (i.e. % identify, % query cover) 
6. **Raw DNA sequences**: DNA sequences in fastq format, demultiplexed for each sample, and MIDs removed

While general purpose of sharing all these data types is to make eDNA studies and data reproducible and FAIR, there are also specific reasons why each of them should be shared. For example, a curated OTU table with assigned taxa and associated sampling date and location records allow prompt re-uses of species occurrence records and standardisation in the context of all other biodiversity data using other methods not limited to eDNA. On the other hand, raw DNA sequences, non-curated OTU and DNA sequence metadata allow data re-users (i.e. researchers and managers) to assess the data quality based on the parameters provided, remove low quality data, or even re-run quality filtering, denoising and taxonomic assignment using their own algorithms and thresholds to fit their purposes. These functions are particularly important because bioinformatic workflows and QA level requirements are different between studies including those re-using shared data. Furthermore, non-curated OTU tables contain OTUs/ASVs and read counts of contamination taxa, non-targeted taxa and control samples, allowing researchers to investigate the common contaminations sequences, taxa, and sources across multiple studies, and identify how to minimise them. Finally, archiving DNA sequences enables future re-analyses of taxonomic assignment using updated reference databases, which would improve the taxonomic ID accuracy and resolutions. 

Raw OTU/ASV tables refer to the initial OTU table produced in a bioinformatics pipeline. Although we call them raw or non-curated OTU table, some level of quality filtering may already have been applied, such as filtering based on minimum length, read counts, error rates, and OTU clustering. The extent of data curation performed on the row OTU/ASV table can vary between studies depending on how bioinformatic pipeline used, and this should be described under the term "noncurOTUtab_description" in a study information table. 

Similarly, curated OTU/ASV tables refer to the OTU tables produced after various data curation processes, including denoising (i.e., custom or LULU curation), removing control samples, and eliminating contamination and non-target taxa. In some studies, several OTUs assigned to the same taxa may be collapsed, and the read counts are summed. We encourage data providers to submit the curated OTU table before collapsing OTUs to preserve more detailed records. The only exception is when denoising and curation steps are applied after OTUs with common taxa are collapsed. Descriptions on how data were curated to produce the curated OTU table should be recorded under the term "curOTUtab_description" in a study information table. 

<div align="center">
    <img src="/assets/images/data_types.png" alt="Data types" width="95%">
</div>


## eDNA data checklist
eDNA data checklist comprise of a total of 222 data fields. We have defined the requirement levels for each term within the context of the eDNA field, categorising them into 12 required, 79 recommended and 131 optional terms. The checklist consists of the terms from existing standards (MIxS, DwC, and the GBIF DNA-derived data extension). Modifications were made from the original sources in field names, descriptions, and examples where necessary for easier uptakes by eDNA communities. New terms were added to accommodate the unique attributes of eDNA study procedures and datasets, and enhance quality assurance functions for future studies re-using datasets. The examples include terms related to bioinformatics tools, parameters, and cutoffs (i.e. demux_tool, demux_max_mismatch), taxonomic assignment scores (i.e. percent_match, percent_query_cover), controls samples (i.e. neg_cont_type, pos_cont_type), and contamination screening method (i.e., screen_contam_method). The checklist also encompasses a range of environmental variables relevant to eDNA samples, sourced from the MIxS sample extensions of Water, Soil, Sediment, Air, HostAssociated, MicrobialMatBiofilm, and SymbiontAssociated. These variables are typically collected during sampling events, and their sharing could offer future opportunities for utilisation in modelling studies, among other applications. We have also incorporated several terms from the eDNA assay development and validation checklist and Minimum Information for eDNA and eRNA Metabarcoding (MIEM) developed by Thalinger et al. (2020) and Klymus et al. (in prep.), respectively. 

Our focus is on two key elements required for FAIR eDNA data: 
1. Recording as much information as possible. 
This is particularly important as eDNA is a relatively new field with rapidly evolving and diversifying workflows (Takahashi et al., 2023). This highlights the significance of recording and sharing comprehensive information, allowing data re-users to assess data reliability based on the QA levels required for their specific purposes.
2. consistently using controlled format and vocabulary to ensure data are machine readable and actionable. 
Several approaches were implemented to enhance vocabulary control. Firstly, some free-text terms from existing standards are now entered using fixed-term options. For example, the entry for target_gene is now selected from a list of 27 gene regions. This standardisation prevents variations such as COI, CO1, COXI, COX1, Cytochrome oxidase I gene, and Cytochrome c oxidase I from being entered differently. If researchers cannot find an appropriate term among the fixed-term options, they should enter “other:” followed by a free-text description. Secondly, Boolean format is utilised wherever possible to indicate whether specific steps were taken in the workflows. Examples include chmera_check_0_1 (where 1 indicates that chimera sequences were checked and removed, and 0 indicates they were not) and screen_nontarget_0_1 (where 1 indicates that non-target species were screened and applied in data curation, and 0 indicates they were not). These fields are followed by additional fields to describe the methods used (i.e. chimera_check_tool, chimera_check_param). This system allows data re-users to easily assess whether these steps were taken in previous studies, which is critical for those requiring stringent QA. Thirdly, units of numeric variables are strictly specified based on the International System of Units (SI) wherever possible, and only numeric entries without units are allowed. When options for units are necessary, separate fields for numeric values and units are provided, with the unit field restricted to fixed-term entries (i.e. samp_size for the numeric value and samp_size_unit with options of mL, L, mg, g, kg, cm2, m2, cm3, m3, and other).

### Standardised formats and the use of verbatim fields
Formats for some data fields are restricted, generally following to other standards (i.e. DwC, MIxS) and databases (GBIF, OBIS, ENA). Original datasets that did not follow such formats should be stored using verbatim fields. For example, decimalLatitude and decimalLongitude are required fields, and must be in decimal degrees using WGS84 datum. If the records in original datasheets follow other formats (i.e. degree minute second, UTM, datums other than WGS84), they should be stored under the terms verbatimLatitude and verbatimeLongitude while decimalLatitude and decimalLongigude must be also entered. Similarly, sampling date and time is under the term collection_date, and utilises the ISO 8601 format (https://www.iso.org/iso-8601-date-and-time-format.html) (yyyy-mm-ddThh:mm:ss) in UTC time. Original records of date and time (i.e. in the local time zone) should be stored under the terms verbatimeDate and verbatimeTime. 
### Sensitive information
Information can be generalised or withheld, even those categorised as “required” terms, in some cases. For example, geographical coordinates can be generalised to protect endangered species and study sites that are culturally important for Indigenous People and Local Communities. They can be mapped to the terms under “infomrationWhiheld” and “dataGeneralization”, which is commonly practiced by other standards including DwC and GBIF (Chapman. 2020).  


## Data submission
There are multiple databases that accommodate eDNA data submission. All the data types outlined in the above sections should be stored in institutional archives and open repositories such as Dryad, Zenodo and Figshare, which provide DOIs for data citation. These data can also be submitted to biodiversity and nucleotide databases to be collated with other datasets. For example, raw DNA sequencing data should be submitted to the short-read archives of ENA, NCBI, or DDBJ, where the data are regularly shared across these three databases. Curated OTU tables, study information and sample metadata should be submitted to OBIS, ALA or GBIF, with OBIS and ALA data being regularly mobilised to GBIF. While most vocabularies and data formats in our guideline are interoperable with these databases, minor rewording and reformatting may be required to meet their publishing standards. GBIF has developed the Integrated Publication Toolkit (IPT) for seamless formatting into their standard. Developing similar formatting tools and scripts for other major databases is one of our future tasks, as outlined in Figure 1 and the section below. 