export const module9 = {
    slug: "module-9",
    title: "Module 9: Reference genomes, transcripts, and annotation basics",
    description:
      "Learn why genome builds, transcripts, HGVS, and annotation context matter for describing and interpreting variants safely in clinical genomics.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What is a reference genome?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a reference genome, and why do clinical genomics pipelines need one?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a reference genome, and why do clinical genomics pipelines need one?”
  
  This lesson starts Module 9 because once the learner understands sequencing data and file flow, the next essential idea is that those reads and variants have to be described relative to something. In modern genomics, that “something” is usually a reference genome assembly: a standard sequence framework used for alignment, coordinates, and variant description. NCBI describes the human reference genome assembly as an essential resource for clinical, forensic, and research uses, and the Genome Reference Consortium describes GRCh38 as the current major human reference assembly.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A reference genome is the standard sequence framework used to place reads, assign coordinates, and describe variants.**
  
  That means it acts like a shared genomic map. It is what lets different people, tools, and reports mean the same thing when they say a variant is at a particular chromosome position. NCBI and other reference-genome resources describe the human reference assembly as the basis for genome annotation, mutation analysis, and broader genomic comparison.
  
  So the key beginner message is:
  
  the reference genome is not just “background information” — it is the coordinate system that makes sequencing data interpretable.`
          },
          {
            title: "Why sequencing pipelines need a reference genome",
            body: `Short-read sequencing does not usually produce one long complete chromosome sequence for a patient. Instead, it produces many short reads. To understand where those reads came from, they are typically aligned against a reference genome. That is why the reference genome matters so much in the pipeline: it provides the framework for mapping reads and then identifying differences relative to that framework. Clinical genomics workflow literature and reference-assembly resources both support this role of the reference as the basis for alignment and downstream comparison.
  
  So the learner should understand:
  
  without a reference genome, it would be much harder to say where a read belongs or where a variant sits.
  
  This is why reference-genome context sits underneath BAM/CRAM coordinates and VCF variant positions.`
          },
          {
            title: "A reference genome is not the perfect human genome",
            body: `This is one of the most important beginner corrections.
  
  A learner may imagine that the reference genome is:
  
  • the exact normal genome
  • the best possible version of one person’s genome
  • the single true sequence every human should match
  
  That is too simplistic.
  
  The human reference genome is a reference assembly, not a perfect universal template for every person. NCBI reference resources describe it as an essential sequence resource and note that RefSeq selects a reference genome for annotation and community use. Broader review literature also explains that the human reference genome is a composite model and does not capture all human diversity.
  
  So the learner should understand:
  
  the reference genome is a practical shared framework, not a statement that all people should match one exact sequence.`
          },
          {
            title: "Why the reference genome is still useful even though people differ from it",
            body: `Human genomes differ from the reference all the time. In fact, that is one reason variant calling exists at all.
  
  But the fact that patients differ from the reference does not make the reference useless. It makes it useful as a common baseline. Review literature describes the human reference genome as a universal coordinate system to which human sequences are aligned and compared, and NCBI reference resources describe it as foundational for annotation and mutation analysis.
  
  So the learner should understand:
  
  the value of the reference genome is not that it matches every patient perfectly — it is that it gives everyone a common system for comparison.
  
  That is what makes coordinate-based genomics possible.`
          },
          {
            title: "What the human reference assembly actually represents",
            body: `At beginner level, the learner does not need the full history of the human reference project, but they do need the right mental model.
  
  The human reference assembly represents chromosomes and additional sequence content assembled and curated to act as a standard genomic framework. NCBI’s GRCh38 assembly pages describe GRCh38 as the Genome Reference Consortium human build 38, and NCBI’s human genome overview pages describe patch releases and assembly updates.
  
  So the learner should understand:
  
  when we say “reference genome,” we usually mean a named genome assembly version, such as GRCh38.
  
  That version naming becomes very important in the next lesson on genome builds.`
          },
          {
            title: "Why reference genomes and reference sequences are linked",
            body: `This lesson is about reference genomes, but it also prepares the learner for transcript and HGVS lessons later.
  
  NCBI RefSeq describes its collection as a comprehensive, non-redundant, well-annotated set of genomic, transcript, and protein reference sequences. That means the reference genome is part of a bigger ecosystem of reference sequences used for describing genes, transcripts, proteins, and variants.
  
  So the learner should understand:
  
  the reference genome is one major reference layer, but it sits alongside transcript and protein reference sequences too.
  
  That is why later modules will talk about transcript choice and HGVS descriptions.`
          },
          {
            title: "Why the reference genome matters for variant coordinates",
            body: `When a report says a variant is at a certain chromosome and position, that position only makes sense relative to a particular genome assembly. Review articles on the human reference genome explicitly describe it as a coordinate system used for alignment, annotation, and variant analysis.
  
  So the learner should understand:
  
  a genomic coordinate is not meaningful in isolation — it is meaningful only relative to a named reference genome build.
  
  That idea is one of the most important foundations for the rest of Module 9.`
          },
          {
            title: "Why this matters in clinical genomics",
            body: `This is the key clinical point.
  
  If the learner does not understand the role of the reference genome, they may later become confused by things like:
  
  • the same variant appearing at different coordinates in different reports
  • different transcript or HGVS descriptions
  • why alignment and variant calling are always “relative to” something
  
  Clinical genomics depends on precision, and reference-genome context is one of the first layers of that precision. NCBI and Genome Reference Consortium resources both show that reference assemblies are curated, versioned resources that underpin analysis and annotation.
  
  So the learner should understand:
  
  the reference genome is one of the main things that makes genomic description precise enough for clinical work.`
          },
          {
            title: "What this lesson is not saying",
            body: `This lesson is not saying:
  
  • the reference genome is the “best” human genome
  • all healthy people should match the reference
  • variation from the reference automatically implies disease
  • one reference genome solves all problems of human genomic diversity
  
  Those would all be oversimplifications. Review literature explicitly notes that the human reference genome does not capture all global genetic diversity, even though it remains extremely useful as a standard framework.
  
  This lesson is only establishing the correct foundation:
  
  the reference genome is a shared framework used to align reads, assign coordinates, and describe genomic differences.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A reference genome is the standard sequence framework used to align reads and describe genomic positions and variants, and its value comes from providing a shared coordinate system rather than from being a perfect representation of any one person’s genome.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “If a patient’s sequence differs from the reference genome, that probably means something has gone wrong.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because the reference genome is a comparison framework, not a statement of what every person’s DNA should look like. Human genomes normally differ from the reference in many places. The purpose of the reference genome is to provide a shared baseline for alignment, coordinates, and variant description, not to imply that every difference from it is abnormal or disease-causing.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A reference genome is the standard sequence framework used to align reads and describe genomic positions. It is not a perfect template of every human genome, but a shared coordinate system that lets genomic findings be described consistently.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A reference genome is the standard sequence framework used to place reads, assign coordinates, and describe variants."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner definition of a reference genome?",
            options: [
              "The exact genome sequence every healthy person should match",
              "A standard genomic framework used for alignment, coordinates, and variant description",
              "A list of all known disease-causing variants",
              "The set of variants found in one patient"
            ],
            answerIndex: 1,
            explanation:
              "The reference genome assembly functions as the shared sequence framework used for alignment, annotation, and mutation analysis."
          },
          {
            question: "Why do sequencing pipelines need a reference genome?",
            options: [
              "Because the sequencer directly outputs chromosome positions only when a reference is present",
              "Because reads usually need to be aligned against a standard framework so they can be placed at genomic coordinates",
              "Because VCF files contain only phenotype data without it",
              "Because the reference genome removes all human variation"
            ],
            answerIndex: 1,
            explanation:
              "Reference-genome resources and workflow literature support the use of the human reference assembly as the coordinate system for alignment and variant comparison."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "The reference genome is the single true human genome",
              "Differences from the reference are always pathogenic",
              "The reference genome is a practical shared baseline for comparison, not a perfect representation of every human genome",
              "The reference genome only matters for research, not clinical genomics"
            ],
            answerIndex: 2,
            explanation:
              "The human reference genome is an essential shared resource, but it is not a perfect universal representation of all human diversity."
          },
          {
            question: "Why does the named genome assembly matter?",
            options: [
              "Because genomic coordinates only make sense relative to a specific reference build",
              "Because every assembly has identical coordinates",
              "Because genome builds are mainly storage formats",
              "Because transcript annotation does not depend on them"
            ],
            answerIndex: 0,
            explanation:
              "The reference genome functions as a coordinate system, so genomic positions are meaningful only relative to a named assembly."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: Why genome builds matter",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why can the same biological variant have different genomic coordinates or descriptions depending on the genome build being used?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why can the same biological variant have different genomic coordinates or descriptions depending on the genome build being used?”
  
  This lesson follows the reference-genome lesson because once the learner understands that genomic coordinates only make sense relative to a reference genome, the next key idea is that there is more than one version of that reference genome.
  
  For human genomics, two of the most important builds the learner will encounter are GRCh37 and GRCh38. NCBI identifies GRCh37 as Genome Reference Consortium Human Build 37 and GRCh38 as Genome Reference Consortium Human Build 38. Ensembl also states that GRCh38 is an improved representation of the human genome compared with GRCh37.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Genome builds matter because genomic coordinates are tied to a specific reference assembly version.**
  
  That means a coordinate like:
  
  • chromosome 7, position X
  
  does not mean the same thing in complete isolation. It only makes sense relative to a named build such as GRCh37 or GRCh38. The Genome Reference Consortium and NCBI treat these as distinct assembly builds, and Ensembl maintains separate support for both human assembly versions.
  
  So the key beginner message is:
  
  a genomic position without a build is incomplete information.
  
  That is one of the most important habits in clinical genomics.`
          },
          {
            title: "What a genome build actually is",
            body: `A genome build is a specific version of the reference genome assembly.
  
  It is not just a nickname. It is a defined assembly release with its own coordinate framework. NCBI lists GRCh37 and GRCh38 as separate human assembly builds, each with its own assembly record and release history.
  
  So the learner should understand:
  
  • GRCh37 and GRCh38 are not interchangeable labels
  • they are different versions of the human reference assembly
  • each version defines genomic coordinates in its own framework
  
  A useful beginner phrase is:
  
  build = version of the reference genome coordinate system.`
          },
          {
            title: "Why different builds exist",
            body: `A beginner may ask:
  
  “If the reference genome already existed, why make a new build?”
  
  Because reference assemblies are improved over time.
  
  Ensembl states that GRCh38 is an improved representation of the human genome compared with GRCh37, with many gaps closed, sequencing errors corrected, and centromere sequences modelled. The Genome Reference Consortium also describes ongoing efforts to improve the human reference assembly and release updates.
  
  So the learner should understand:
  
  new builds exist because the reference genome is revised and improved, not because the old one was useless.`
          },
          {
            title: "Why the same biological variant can have different coordinates",
            body: `This is the core practical lesson.
  
  If GRCh37 and GRCh38 are different assembly versions, then the same biological site in a patient may map to different coordinate positions depending on which build is being used.
  
  That does not necessarily mean the biology changed. It means the reference framework changed. Because the assembly sequence and structure can differ between builds, the reported chromosome position of a variant can differ too.
  
  So the learner should understand:
  
  same biological variant ≠ always same genomic coordinate.
  
  That is one of the most important reasons build awareness matters in clinical genomics.`
          },
          {
            title: "Why build differences can cause report confusion",
            body: `A very common beginner confusion is to compare two reports and think:
  
  “These coordinates are different, so they must be different variants.”
  
  That is not always true.
  
  If one report uses GRCh37 and another uses GRCh38, the same biological variant may appear at different genomic positions. Ensembl explicitly supports both human builds and keeps separate resources for them, which reflects how common this issue is in real genomics work.
  
  So the learner should understand:
  
  before deciding that two variant descriptions disagree, first check whether they are using the same build.`
          },
          {
            title: "Why GRCh37 and GRCh38 both still matter",
            body: `A learner may assume that because GRCh38 is newer, GRCh37 must be irrelevant.
  
  That is too simple.
  
  GRCh38 is the current major human reference build, but GRCh37 is still widely encountered in databases, legacy pipelines, historical reports, and some tools. Ensembl explicitly maintains GRCh37 resources separately from its current GRCh38 site, which shows that both builds still matter in practice.
  
  So the learner should understand:
  
  you may still see both GRCh37 and GRCh38 in real clinical genomics work.
  
  That means build-awareness is not just theory. It is a day-to-day practical necessity.`
          },
          {
            title: "What about patch releases?",
            body: `The learner may also encounter names like:
  
  • GRCh38.p14
  • GRCh37.p13
  
  These are patch releases or minor updates within a major build family. NCBI’s human assembly pages list these patch versions, and the Genome Reference Consortium explains that it releases regional fixes and updates. Ensembl also notes that human assembly updates known as patches are incorporated without changing default chromosome coordinates.
  
  At beginner level, the important point is:
  
  major build differences like GRCh37 vs GRCh38 are the first thing to notice.
  
  Patch versions matter too, but the big conceptual step is understanding that build version must be stated at all.`
          },
          {
            title: "Why build names must be stated clearly",
            body: `The Genome Reference Consortium recommends official naming and clear use of unique identifiers in communications.
  
  So the learner should understand:
  
  good clinical genomics practice requires naming the build explicitly.
  
  That means descriptions like:
  
  • “chr1:123456A>G”
  
  are incomplete unless the build is known.
  
  A safer style is more like:
  
  • “on GRCh37…”
  • “on GRCh38…”
  
  This becomes essential when comparing reports, pipelines, annotation outputs, or database entries.`
          },
          {
            title: "Why this matters before transcripts and annotation",
            body: `This lesson matters because later steps in variant description depend on build context.
  
  If the genomic coordinate changes between builds, then:
  
  • transcript overlap can differ
  • annotation can differ
  • consequence descriptions can shift
  • report matching can become confusing
  
  Ensembl resources for different human assemblies and VEP support for both GRCh37 and GRCh38 show that annotation is build-aware, not build-free.
  
  So the learner should understand:
  
  build is one of the first pieces of context needed before transcript choice and annotation can be interpreted safely.
  
  That is why this lesson comes early in Module 9.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Genome builds matter because genomic coordinates are defined relative to a specific reference assembly version, so the same biological variant can appear at different positions or with different context depending on whether GRCh37 or GRCh38 is being used.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner compares two reports for what seems to be the same patient variant. One report gives one chromosome coordinate, and the other gives a different coordinate. They conclude that the reports must disagree.
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because the reports may be using different genome builds. GRCh37 and GRCh38 are different human reference assemblies, so the same biological variant can be assigned different genomic coordinates depending on which build is being used. Before concluding that the reports conflict, the learner should first check the named reference build used in each report.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A genome build is a specific version of the reference genome assembly. Coordinates only make sense relative to that build, so the same biological variant can look different across reports if one uses GRCh37 and another uses GRCh38.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Genome builds matter because genomic coordinates are tied to a specific reference assembly version."
          }
        ],
        quiz: [
          {
            question: "What is a genome build?",
            options: [
              "A list of all disease-causing variants in a population",
              "A specific version of the reference genome assembly used as a coordinate framework",
              "A sequencing machine setting",
              "A transcript-specific protein numbering system"
            ],
            answerIndex: 1,
            explanation:
              "NCBI identifies GRCh37 and GRCh38 as distinct human assembly builds, each representing a specific assembly version."
          },
          {
            question:
              "Why can the same biological variant have different genomic coordinates in different reports?",
            options: [
              "Because sequencing machines generate random positions",
              "Because reports may be using different genome builds such as GRCh37 and GRCh38",
              "Because every transcript has its own chromosome numbering system",
              "Because VCF files do not use coordinates"
            ],
            answerIndex: 1,
            explanation:
              "Genomic coordinates are defined relative to a reference build, and GRCh37 and GRCh38 are different assembly versions."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "GRCh37 and GRCh38 are just two names for the same assembly",
              "GRCh38 is an improved human reference assembly compared with GRCh37",
              "GRCh37 is irrelevant in modern genomics and never encountered",
              "Genome build does not affect annotation or reporting"
            ],
            answerIndex: 1,
            explanation:
              "Ensembl states that GRCh38 is an improved representation of the human genome compared with GRCh37."
          },
          {
            question:
              "Why is it unsafe to write a genomic coordinate without stating the build?",
            options: [
              "Because chromosome names are never used in genomics",
              "Because a coordinate is only meaningful relative to a specific reference assembly version",
              "Because all builds share identical positions",
              "Because only transcript coordinates matter clinically"
            ],
            answerIndex: 1,
            explanation:
              "Genome build defines the coordinate system, so a coordinate without its assembly context is incomplete."
          }
        ]
      },
      {
        slug: "lesson-3",
        title:
          "Lesson 3: What transcripts are and why one gene can have more than one",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a transcript in clinical genomics, and why can one gene have more than one transcript?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a transcript in clinical genomics, and why can one gene have more than one transcript?”
  
  This lesson follows the genome-build lesson because once the learner understands that genomic coordinates depend on a named reference assembly, the next major piece of context is the transcript. In annotation resources such as RefSeq and Ensembl, one gene can be linked to multiple transcript records, and Ensembl explicitly describes the transcript table for a gene as showing all splice variants, including non-coding transcripts.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A transcript is a specific RNA product associated with a gene, and one gene can have more than one transcript because genes can be used in more than one way.**
  
  This lesson is not mainly about transcript biology in the abstract. It is about transcript context in annotation and clinical genomics.
  
  So the key beginner message is:
  
  a gene name alone is often not enough to define the exact reference sequence being used for variant description.
  
  You often also need to know which transcript is being referred to. RefSeq is built around genomic, transcript, and protein reference sequences, and Ensembl provides multiple transcript models per gene where appropriate.
  
  That is one of the most important foundations for the next lessons.`
          },
          {
            title: "What a transcript is in this module",
            body: `Earlier in the curriculum, transcripts were introduced biologically as RNA copies produced from genes.
  
  In this module, the learner now needs the annotation view:
  
  a transcript is a named reference sequence model for one RNA product of a gene.
  
  That is why transcript identifiers appear in resources such as:
  
  • RefSeq transcripts such as NM_ or NR_ records
  • Ensembl transcripts such as ENST identifiers
  
  RefSeq explicitly says its collection includes genomic DNA, transcripts, and proteins, and MANE documentation describes matched RefSeq and Ensembl transcript pairs.
  
  So the learner should understand:
  
  transcripts are not just biology concepts — they are also concrete reference sequences used in annotation and reporting.`
          },
          {
            title: "Why one gene can have more than one transcript",
            body: `This is the main practical lesson.
  
  One gene can have more than one transcript because genes can produce multiple RNA isoforms. Ensembl states that transcripts belonging to the same gene ID may differ in transcription start and end sites, splice events, and exons, and these differences can give rise to very different proteins. Review literature on alternative transcripts in variant interpretation also notes that most multiexon genes undergo alternative splicing and may have several transcripts per gene.
  
  So the learner should understand:
  
  one gene does not always equal one transcript.
  
  A single gene may have:
  
  • multiple splice forms
  • different exon combinations
  • different untranslated regions
  • coding and non-coding transcript forms
  
  That is why transcript choice becomes so important later in variant description.`
          },
          {
            title: "Multiple transcripts do not mean the gene is unclear",
            body: `A beginner may think:
  
  “If a gene has multiple transcripts, does that mean we do not know what the real gene is?”
  
  That is not the right way to think about it.
  
  Multiple transcripts are a normal feature of gene annotation. Ensembl explicitly shows all splice variants for a gene in its transcript table, and NCBI RefSeq provides curated transcript reference sequences as part of its non-redundant reference collection.
  
  So the learner should understand:
  
  multiple transcripts are usually part of normal annotation practice, not a sign that something is wrong.
  
  The real question is not:
  
  • “which transcript is the real one?”
  
  The more practical question is:
  
  • “which transcript is being used for this description, analysis, or report?”`
          },
          {
            title: "Why transcript differences matter for variant description",
            body: `This is where the topic becomes clinically important.
  
  If one transcript includes a certain exon and another transcript does not, then the same genomic variant may:
  
  • be described differently
  • fall in a different cDNA position
  • have a different predicted coding consequence
  • be outside the coding region of another transcript altogether
  
  Review literature on alternative transcripts in variant interpretation explicitly states that interpretation of genomic variation may differ according to transcript selection and tissue expression.
  
  So the learner should understand:
  
  transcript choice changes how a variant is described and sometimes how important it appears.
  
  That is one of the biggest reasons this module exists.`
          },
          {
            title: "Coding and non-coding transcripts",
            body: `Not all transcripts are protein-coding.
  
  Ensembl’s transcript table includes non-coding transcripts as well as coding splice variants, and RefSeq also includes different types of transcript records.
  
  So the learner should understand:
  
  a gene may have protein-coding transcripts, non-coding transcripts, or both.
  
  That matters because a variant may look:
  
  • coding in one transcript
  • non-coding in another
  • differently placed depending on which transcript is chosen
  
  This is another reason why transcript context is essential before assigning consequence labels.`
          },
          {
            title: "Why transcript identifiers matter",
            body: `Because one gene can have multiple transcripts, gene name alone is often not precise enough.
  
  That is why transcript identifiers matter. Examples include:
  
  • RefSeq transcript IDs such as NM_... or NR_...
  • Ensembl transcript IDs such as ENST...
  
  MANE documentation explains that MANE Select transcripts are pairs of identically annotated RefSeq and Ensembl transcripts.
  
  So the learner should understand:
  
  if a report or annotation names a transcript explicitly, that is not extra trivia — it is part of the precise variant context.`
          },
          {
            title: "Why some transcripts are treated as representative",
            body: `A learner may reasonably ask:
  
  “If there are multiple transcripts, how do people decide which one to use?”
  
  Different resources provide ways to identify representative or especially useful transcripts.
  
  Examples include:
  
  • RefSeq Select
  • Ensembl Canonical
  • MANE Select
  • other transcript quality or relevance flags
  
  NCBI says RefSeq Select provides a representative transcript for every protein-coding gene, while Ensembl describes its Canonical transcript as a single representative transcript per locus. Ensembl and NCBI both describe MANE Select as a matched clinically useful transcript set shared across RefSeq and Ensembl.
  
  So the learner should understand:
  
  multiple transcripts may exist, but some are chosen as representative defaults for consistency.
  
  That does not mean every other transcript is irrelevant. It means default transcript choices are used to make analysis and reporting more consistent.`
          },
          {
            title: "Why this matters before HGVS and annotation",
            body: `This lesson matters because later variant descriptions often depend on transcript context.
  
  Without understanding transcripts, the learner may be confused by things like:
  
  • different cDNA numbers for what seems like the same variant
  • different protein consequences in different reports
  • why one annotation tool or database seems to disagree with another
  
  The main reason is often not disagreement about the biology itself, but different transcript context. Alternative-transcript review literature and Ensembl annotation resources both support the idea that transcript selection can substantially affect variant interpretation.
  
  So the learner should understand:
  
  transcript awareness is one of the key foundations for safe variant annotation.
  
  That is why this lesson comes before HGVS basics.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A transcript is a specific RNA reference sequence associated with a gene, and one gene can have multiple transcripts because of differences such as splice patterns and start/end sites, which means transcript choice can change how a variant is described.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner sees two reports for variants in the same gene. One report names one transcript and the other names a different transcript. They assume one of the reports must be wrong because a gene should only have one transcript.
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because one gene can have multiple transcripts. Ensembl and RefSeq both provide transcript models, and those transcripts can differ in exon structure, start/end sites, or coding status. So two reports can legitimately describe the same gene using different transcript references, and that can lead to different cDNA or protein-level variant descriptions without either report necessarily being wrong.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A gene can have more than one transcript, and transcripts are the specific RNA reference sequences used in annotation and reporting. Because transcripts can differ, the same genomic variant may be described differently depending on which transcript is used.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A transcript is a specific RNA product associated with a gene, and one gene can have more than one transcript because genes can be used in more than one way."
          }
        ],
        quiz: [
          {
            question: "What is a transcript in the context of this module?",
            options: [
              "A permanent list of all variants in a gene",
              "A specific RNA reference sequence associated with a gene",
              "A genome build version such as GRCh38",
              "A file format for aligned reads"
            ],
            answerIndex: 1,
            explanation:
              "RefSeq and Ensembl both provide transcript reference sequences as part of their annotation systems."
          },
          {
            question: "Why can one gene have more than one transcript?",
            options: [
              "Because genes are randomly duplicated during annotation",
              "Because transcripts from the same gene can differ in splice events, start/end sites, exon structure, or coding status",
              "Because genome builds change gene names",
              "Because every gene must have exactly one coding and one non-coding transcript"
            ],
            answerIndex: 1,
            explanation:
              "Ensembl states that transcripts under the same gene ID may differ in splice events, exons, and transcription boundaries."
          },
          {
            question: "Why does transcript choice matter in clinical genomics?",
            options: [
              "Because transcript names are mainly aesthetic labels",
              "Because the same genomic variant can have different cDNA or protein descriptions depending on the transcript used",
              "Because transcripts only matter in RNA-seq, not variant annotation",
              "Because one transcript is always universally correct for every purpose"
            ],
            answerIndex: 1,
            explanation:
              "Variant interpretation can differ according to transcript selection, especially when different transcripts have different exon structures or coding consequences."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "Multiple transcripts for one gene usually mean the annotation is unreliable",
              "Gene name alone is often enough, so transcript identifiers are not very important",
              "Multiple transcripts are normal, and explicit transcript identifiers help make variant descriptions precise",
              "Only non-coding genes have multiple transcripts"
            ],
            answerIndex: 2,
            explanation:
              "Multiple transcripts are a normal feature of gene annotation, and transcript IDs are important for precise variant description and reporting."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: Why transcript choice changes variant description",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why can the same genomic variant have different cDNA or protein descriptions depending on which transcript is used?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why can the same genomic variant have different cDNA or protein descriptions depending on which transcript is used?”
  
  This lesson follows the transcript lesson because once the learner understands that one gene can have multiple transcripts, the next key step is to see why that matters in real reporting and annotation.
  
  The short answer is:
  
  a variant is described relative to a specific reference sequence, and different transcripts provide different reference sequences and numbering systems. The HGVS recommendations state that a sequence variant is defined in the context of a reference sequence identified by a unique sequence identifier, because the reference sequence defines the numbering system and default state.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Transcript choice changes variant description because different transcripts can have different exon structures, coding regions, and numbering systems.** Ensembl notes that transcripts for the same gene can differ in splice events, exons, and start/end sites, and the HGVS guidance states that the chosen reference sequence defines how the variant is numbered and described.
  
  So the key beginner message is:
  
  the same biological DNA change can look different on paper when different transcripts are used.
  
  That is one of the most important practical lessons in clinical genomics.`
          },
          {
            title: "A transcript provides the numbering system for cDNA descriptions",
            body: `When a variant is described at the cDNA level, the numbering depends on the transcript reference sequence being used. HGVS states that variants described on the DNA level are mostly reported relative to a specific coding DNA reference sequence, which is why descriptions such as c. notation depend on the chosen transcript. HGVS also states that when variants are reported in relation to a transcript, the preferred reference sequence is the one suggested by the MANE project.
  
  So the learner should understand:
  
  a cDNA description is never floating in space — it is always relative to a named transcript.
  
  That is why transcript identifiers matter so much in reports.`
          },
          {
            title: "Different transcripts can include different exons",
            body: `One major reason descriptions change is that different transcripts can use different exon structures. Ensembl states that transcripts belonging to the same gene can differ in splice events and exons, and its VEP tutorial shows that one genomic variant can have consequences in more than one transcript when a gene has multiple splicing variants.
  
  So the learner should understand:
  
  if one transcript includes an exon and another transcript does not, the same genomic variant may sit in very different transcript contexts.
  
  That can mean the variant is:
  
  • coding in one transcript
  • non-coding in another
  • exonic in one transcript
  • intronic or untranslated in another
  
  This is one of the biggest reasons transcript choice changes the final description.`
          },
          {
            title: "Different transcripts can give different cDNA positions",
            body: `Even when the same exon is present in more than one transcript, the cDNA numbering can still differ because the transcript length, exon usage, and start position can differ. HGVS states that the reference sequence defines the numbering system, and Ensembl’s multiple-transcript resources make clear that transcript models are not all identical.
  
  So the learner should understand:
  
  the same genomic variant can have different c. numbers in different transcripts.
  
  That does not automatically mean one description is wrong. It may simply mean the variant has been described against a different transcript reference.`
          },
          {
            title: "Different transcripts can give different protein consequences",
            body: `This is where the lesson becomes especially important clinically.
  
  If transcripts differ in exon structure or coding sequence, the same genomic variant can produce different predicted protein consequences. Review literature on alternative transcripts in variant interpretation states that interpretation of genomic variation may differ according to transcript selection, and Ensembl variant resources show transcript-specific consequences for the same variant.
  
  So the learner should understand:
  
  the same genomic variant might be called missense in one transcript, synonymous in another, or even non-coding in another.
  
  That is one of the strongest reasons transcript choice matters in clinical genomics.`
          },
          {
            title: "Why this can make reports look inconsistent",
            body: `A common beginner reaction is:
  
  “These two reports must disagree.”
  
  But sometimes they do not disagree biologically at all. They are simply using different transcript references. The HGVS recommendations say the reference sequence used should always be mentioned, and Ensembl VEP documentation warns that ambiguous gene-based descriptions are not recommended because they can produce multiple different genomic interpretations.
  
  So the learner should understand:
  
  before assuming two reports conflict, first check the transcript reference being used.
  
  That is one of the most useful habits in real-world variant review.`
          },
          {
            title: "Why MANE matters",
            body: `Because transcript choice can change descriptions so much, genomics resources try to standardise transcript selection where possible.
  
  The MANE project is especially important here. NCBI states that MANE Select provides a single representative transcript per human protein-coding gene, matched exactly between RefSeq and Ensembl/GENCODE. A 2022 MANE paper explains that MANE Select identifies one representative transcript per gene, while MANE Plus Clinical adds extra transcripts where the Select transcript alone is not enough to report all known clinical variants.
  
  So the learner should understand:
  
  MANE exists to reduce transcript-related inconsistency in clinical genomics.
  
  That does not eliminate every transcript issue, but it helps create a more consistent default.`
          },
          {
            title: "Why one default transcript does not solve everything",
            body: `A learner might think:
  
  “If there is a default transcript, then transcript choice stops mattering.”
  
  That is too simple.
  
  A 2022 MANE paper explains that MANE Plus Clinical transcripts are needed for some genes because a single representative transcript is not always enough to capture all clinically relevant variants. Annotation literature also notes that transcript choice can still affect interpretation.
  
  So the learner should understand:
  
  a representative transcript helps standardisation, but some clinically important variants still need alternative transcript context.
  
  That is why transcript awareness remains important even when MANE is used.`
          },
          {
            title: "Why annotation tools care about transcript choice",
            body: `Annotation tools such as Ensembl VEP do not simply report one universal consequence automatically. They consider consequences relative to transcripts. Ensembl’s VEP tutorial shows that the same uploaded variant can produce multiple transcript-specific outputs, and VEP documentation explains that transcript sets and transcript ordering influence annotation output.
  
  So the learner should understand:
  
  annotation is transcript-aware, not transcript-free.
  
  That means downstream consequence labels are partly shaped by transcript selection.`
          },
          {
            title: "Why this matters in clinical genomics",
            body: `This is the key clinical point.
  
  If the learner ignores transcript choice, they may:
  
  • think two reports disagree when they do not
  • miss published evidence because a variant was described using a different transcript
  • misunderstand why one annotation says missense and another says non-coding
  
  Recent nomenclature standardisation literature warns that different descriptions for the same sequence variant can create real clinical risk, including missed evidence and false-negative familial testing if the wrong familial variant description is used.
  
  So the learner should understand:
  
  transcript choice is not a minor technical detail — it can affect communication, evidence matching, and clinical safety.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Transcript choice changes variant description because each transcript provides its own reference sequence and numbering system, so the same genomic variant can receive different cDNA or protein descriptions — and sometimes different predicted consequences — depending on which transcript is used.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner compares two reports for a variant in the same gene. One report describes the variant as c.250G>A on one transcript, and the other describes what seems to be the same underlying genomic change as c.310G>A on another transcript. They conclude that one report must be wrong.
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because the two reports may be using different transcript reference sequences. HGVS states that a sequence variant is defined in the context of a specific reference sequence, and transcripts can differ in exon structure and numbering. So the same genomic variant can have different cDNA descriptions depending on which transcript is used, without either report necessarily being wrong. The first thing to check is the transcript identifier, not just the c. number.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A transcript provides the reference sequence and numbering system for cDNA and many protein-level variant descriptions. Because one gene can have multiple transcripts, the same genomic variant can be described differently depending on which transcript is used.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Transcript choice changes variant description because different transcripts can have different exon structures, coding regions, and numbering systems."
          }
        ],
        quiz: [
          {
            question:
              "Why can the same genomic variant have different c. descriptions?",
            options: [
              "Because cDNA numbering is random in different databases",
              "Because cDNA descriptions are defined relative to a chosen transcript reference sequence",
              "Because genome builds automatically change every transcript to the same numbering system",
              "Because only protein-coding variants get c. descriptions"
            ],
            answerIndex: 1,
            explanation:
              "HGVS states that a variant is defined in the context of a reference sequence, and transcript-based c. descriptions depend on that chosen reference transcript."
          },
          {
            question:
              "Which statement best explains why transcript choice can change predicted consequence?",
            options: [
              "Because annotation tools ignore transcript structure",
              "Because transcripts for the same gene can differ in exon structure and coding sequence, so the same genomic variant can fall in different functional contexts",
              "Because all transcripts of a gene always encode the same protein sequence",
              "Because transcript choice matters only for RNA-seq, not DNA variant annotation"
            ],
            answerIndex: 1,
            explanation:
              "Ensembl states that transcripts can differ in splice events and exons, and transcript-aware annotation resources show different consequences for the same variant in different transcripts."
          },
          {
            question: "Why is MANE important?",
            options: [
              "Because it removes the need to mention transcript identifiers",
              "Because it provides matched representative RefSeq and Ensembl/GENCODE transcripts to improve consistency in clinical reporting",
              "Because it replaces genome builds",
              "Because it guarantees every clinically relevant variant can be described with one and only one transcript"
            ],
            answerIndex: 1,
            explanation:
              "NCBI and the MANE paper describe MANE Select as a matched representative transcript set between RefSeq and Ensembl/GENCODE, created to support more consistent clinical genomics."
          },
          {
            question:
              "What is the safest professional habit when two variant descriptions in the same gene look different?",
            options: [
              "Assume one must be wrong",
              "Ignore transcript identifiers and compare only protein change labels",
              "First check whether the reports are using the same transcript reference sequence",
              "Assume the difference is caused by sequencing error"
            ],
            answerIndex: 2,
            explanation:
              "Different transcript references can legitimately produce different cDNA or protein descriptions for the same genomic change, so transcript context should be checked first."
          }
        ]
      },
      {
        slug: "lesson-5",
        title:
          "Lesson 5: What HGVS and variant annotation are at beginner level",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is HGVS, what is variant annotation, and why are they not the same thing?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is HGVS, what is variant annotation, and why are they not the same thing?”
  
  This lesson follows the transcript-choice lesson because once the learner understands that a variant must be described relative to a particular reference sequence and transcript, the next step is to understand two linked but different ideas:
  
  • how a variant is named
  • how a variant is annotated
  
  The HGVS recommendations explain how sequence variants should be described relative to a named reference sequence, while Ensembl VEP is a widely used annotation tool that predicts the effects of variants on transcripts, proteins, and regulatory regions.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **HGVS is the system for writing down a variant description precisely, while annotation is the process of adding biological context and predicted consequences to that variant.**
  
  These two ideas are closely linked, but they are not the same thing.
  
  A safe beginner contrast is:
  
  • HGVS asks: how should this variant be written correctly relative to a reference sequence?
  • annotation asks: what gene, transcript, region, or predicted consequence does this variant affect?
  
  So the key beginner message is:
  
  naming a variant and interpreting a variant are related steps, but they are not identical steps.
  
  That distinction is one of the most important foundations for safe clinical genomics.`
          },
          {
            title: "What HGVS is",
            body: `HGVS refers to the recommendations of the Human Genome Variation Society for describing sequence variants. The HGVS site explains that sequence variants are defined in the context of a reference sequence identified by a unique sequence identifier, because the reference sequence defines the numbering system and default state.
  
  So the learner should understand:
  
  HGVS is a naming framework for variants.
  
  At beginner level, the important idea is that HGVS descriptions are:
  
  • precise
  • reference-sequence-based
  • dependent on context such as genomic, cDNA, or protein level
  
  This is why variants are not safely described as vague phrases like:
  
  • “a mutation in gene X”
  
  when a precise sequence-level description is needed.`
          },
          {
            title: "Why HGVS depends on a reference sequence",
            body: `This is one of the most important points in the whole module.
  
  HGVS explicitly says that a variant must be described relative to a named reference sequence. That is because the reference sequence defines:
  
  • the coordinate system
  • the numbering
  • the baseline from which the change is described
  
  So the learner should understand:
  
  an HGVS description is incomplete without its reference sequence context.
  
  That means when you see a variant written at the:
  
  • genomic level
  • cDNA level
  • protein level
  
  you should remember that the notation depends on which reference sequence is being used.
  
  This connects directly to the previous lessons on genome builds and transcripts.`
          },
          {
            title: "What the main HGVS prefixes mean at beginner level",
            body: `At beginner level, the learner does not need full syntax mastery yet, but they should know the broad meaning of the common prefixes.
  
  The HGVS recommendations use prefixes such as:
  
  • g. for genomic sequence
  • c. for coding DNA sequence
  • n. for non-coding DNA transcript sequence
  • p. for protein sequence
  
  So the learner should understand:
  
  the prefix tells you what reference layer the description belongs to.
  
  For example:
  
  • a g. description is relative to genomic DNA
  • a c. description is relative to a coding transcript
  • a p. description is relative to the protein consequence
  
  That means the same biological variant may legitimately have:
  
  • a genomic description
  • a transcript-level description
  • a protein-level description
  
  all referring to the same underlying event, but from different reference layers.`
          },
          {
            title: "What variant annotation means",
            body: `Variant annotation means adding biological information to a variant.
  
  Ensembl VEP states that it predicts the effect of variants on:
  
  • gene transcripts
  • protein sequence
  • regulatory regions
  
  and can also report reference data such as:
  
  • gene associations
  • variant phenotype associations
  • population allele frequencies
  
  So the learner should understand:
  
  annotation is about attaching context to a variant, not just naming it.
  
  At beginner level, annotation may include things like:
  
  • which gene overlaps the variant
  • which transcript is affected
  • whether the consequence is missense, synonymous, intronic, upstream, and so on
  • whether population-frequency or known-variant information is available
  
  That is why annotation matters so much for downstream filtering and prioritisation.`
          },
          {
            title: "HGVS and annotation are linked, but not identical",
            body: `A learner may assume that if a variant has an HGVS name, then it is already fully annotated.
  
  That is too simple.
  
  HGVS tells you how to describe the sequence change correctly. Annotation tells you what that sequence change may mean in biological context. Ensembl VEP documentation shows that a single input variant can be annotated across multiple transcripts and multiple consequence contexts, while HGVS guidance is focused on accurate description relative to a named reference sequence.
  
  So the learner should understand:
  
  HGVS is description-focused; annotation is consequence/context-focused.
  
  This is one of the most useful professional distinctions in beginner clinical genomics.`
          },
          {
            title: "Why one variant can have multiple annotations",
            body: `This lesson connects directly back to transcript choice.
  
  Ensembl VEP documentation states that by default it annotates every genomic feature that an input variant overlaps, and if a variant overlaps a gene with multiple transcripts, a block of annotation can be reported for each transcript.
  
  So the learner should understand:
  
  one genomic variant can have multiple transcript-specific annotations.
  
  That means the same variant can be:
  
  • missense in one transcript
  • synonymous in another
  • intronic in another
  • non-coding in another
  
  This is one of the biggest reasons annotation can look more complicated than simple variant naming.`
          },
          {
            title: "Why annotation tools need transcript sets and reference databases",
            body: `Annotation tools do not work in a vacuum. They rely on transcript models and reference resources.
  
  Ensembl VEP documentation explains that annotation depends on transcript databases and that users can choose transcript sets such as Ensembl/GENCODE or RefSeq. RefSeq itself is a comprehensive, integrated, non-redundant, well-annotated set of genomic, transcript, and protein reference sequences.
  
  So the learner should understand:
  
  annotation depends on the underlying transcript and reference data source.
  
  That is why annotation results can vary depending on:
  
  • build
  • transcript set
  • transcript choice
  • annotation tool settings
  
  This is not necessarily an error. It is often a context issue.`
          },
          {
            title: "Why MANE matters here too",
            body: `Because transcript choice can create inconsistency, transcript harmonisation projects matter for both HGVS descriptions and annotation.
  
  NCBI states that MANE transcripts are exact matches in exon coordinates, coding region, and sequence between RefSeq and Ensembl/GENCODE, and that the identifiers can be used synonymously.
  
  So the learner should understand:
  
  MANE helps reduce disagreement between transcript sources by providing matched transcript references across major annotation systems.
  
  That makes it especially useful in clinical genomics, where consistency in naming and annotation matters.`
          },
          {
            title: "Why this matters in clinical genomics",
            body: `This is the key clinical point.
  
  If the learner confuses HGVS with annotation, they may:
  
  • think a correct name is the same as a full interpretation
  • miss that multiple transcript-specific consequences may exist
  • misunderstand why different tools or reports look different
  • fail to notice that a variant description is incomplete without reference context
  
  Ensembl VEP exists because raw coordinates alone are not enough; variants need biological annotation. HGVS exists because vague naming is unsafe and imprecise. Together, they support clear and context-aware clinical genomics.
  
  So the learner should understand:
  
  precise naming and contextual annotation are both essential, but they solve different problems.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **HGVS is the standard way of writing a variant relative to a named reference sequence, while variant annotation is the process of adding transcript, gene, region, and predicted-consequence context to that variant.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner sees a variant written with a valid-looking HGVS description and says, “That means the variant is already fully interpreted.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because an HGVS description tells you how the sequence change is written relative to a reference sequence, but it does not by itself provide the full biological context. Annotation is still needed to determine which gene or transcript is affected, what the predicted consequence is, and whether the variant overlaps coding, non-coding, or regulatory regions. So a correct HGVS name is important, but it is not the same as a full annotation or interpretation.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “HGVS tells me how to write a variant correctly relative to a named reference sequence. Annotation tells me what that variant overlaps and what its predicted consequences are in genes, transcripts, proteins, or regulatory regions. They are linked, but they are not the same thing.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "HGVS is the system for writing down a variant description precisely, while annotation is the process of adding biological context and predicted consequences to that variant."
          }
        ],
        quiz: [
          {
            question: "What is the best beginner description of HGVS?",
            options: [
              "A tool that predicts whether a variant is pathogenic",
              "A nomenclature system for describing sequence variants relative to a named reference sequence",
              "A database of all disease genes",
              "A file format for called variants"
            ],
            answerIndex: 1,
            explanation:
              "HGVS recommendations describe how sequence variants should be written in the context of a specific reference sequence."
          },
          {
            question: "What is the best beginner description of variant annotation?",
            options: [
              "Rewriting a variant in a shorter format",
              "Adding biological context such as gene overlap, transcript consequence, regulatory overlap, and related information to a variant",
              "Renaming genome builds",
              "Compressing a BAM file into CRAM"
            ],
            answerIndex: 1,
            explanation:
              "Ensembl VEP predicts variant effects on transcripts, proteins, and regulatory regions and can add associated reference information."
          },
          {
            question: "Why can one genomic variant have multiple annotations?",
            options: [
              "Because annotation tools are inconsistent and should normally produce only one answer",
              "Because a variant can overlap multiple transcripts or genomic features, each with its own possible consequence",
              "Because HGVS allows random transcript selection",
              "Because one variant can only ever be described at protein level"
            ],
            answerIndex: 1,
            explanation:
              "Ensembl VEP states that by default it reports annotation for every genomic feature overlapped by a variant, including multiple transcripts where relevant."
          },
          {
            question:
              "Why is it unsafe to treat HGVS and annotation as the same thing?",
            options: [
              "Because HGVS is only used in research and annotation is only used clinically",
              "Because HGVS gives a standard description of the sequence change, while annotation adds biological and transcript-level context that HGVS alone does not provide",
              "Because annotation replaces the need for reference sequences",
              "Because transcript choice never affects annotation"
            ],
            answerIndex: 1,
            explanation:
              "HGVS focuses on accurate description relative to a reference sequence, while annotation tools such as VEP predict transcript- and region-based effects and add broader context."
          }
        ]
      },
      {
        slug: "lesson-6",
        title:
          "Lesson 6: Why reference, transcript, and annotation context matter in clinical genomics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why does clinical genomics need the reference genome, transcript, and annotation context to be stated clearly, and what can go wrong if that context is missing?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why does clinical genomics need the reference genome, transcript, and annotation context to be stated clearly, and what can go wrong if that context is missing?”
  
  This lesson finishes Module 9 by bringing the whole module together. The learner has now seen that:
  
  • genomic coordinates only make sense relative to a reference genome build
  • one gene can have multiple transcripts
  • transcript choice can change cDNA and protein descriptions
  • HGVS is about precise naming
  • annotation is about adding biological context and predicted consequences
  
  The key practical lesson is:
  
  a variant description is not fully meaningful unless its context is clear.
  
  HGVS states that a sequence variant is defined in the context of a reference sequence identified by a unique identifier because that reference defines the numbering system and default state. Ensembl VEP documentation also shows that annotation is build-aware and transcript-aware.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Clinical genomics depends on precise context because the same biological variant can look different depending on the genome build, transcript, and annotation system being used.**
  
  That means a variant is never just:
  
  • “a change in gene X”
  
  It is more precisely something like:
  
  • a genomic change on a named build
  • described relative to a named transcript
  • annotated using a defined transcript set and annotation system
  
  So the key beginner message is:
  
  context is part of the variant description, not an optional extra.
  
  That is one of the most important professional lessons in beginner clinical genomics.`
          },
          {
            title: "Why reference-genome context matters",
            body: `A genomic coordinate is only meaningful relative to a specific genome build. GRCh37 and GRCh38 are different human reference assemblies, and NCBI lists them as distinct builds. Because the assembly framework changes between builds, the same biological variant can appear at a different genomic coordinate depending on the build being used.
  
  So the learner should understand:
  
  if the build is missing, the coordinate is incomplete.
  
  This matters because otherwise:
  
  • two reports can look inconsistent when they are actually describing the same event on different builds
  • a database search can fail
  • an annotation workflow can be run on the wrong assembly
  
  Ensembl VEP documentation explicitly says inputs mapped to GRCh37 and GRCh38 must be handled separately.
  
  That is why build-awareness is a basic safety habit.`
          },
          {
            title: "Why transcript context matters",
            body: `A gene can have multiple transcripts, and different transcripts can differ in exon structure, splice pattern, untranslated regions, and coding sequence. Because HGVS cDNA descriptions depend on a transcript reference sequence, and because annotation tools calculate consequences relative to transcripts, the same genomic change can receive different cDNA numbers or different predicted consequences depending on the transcript used.
  
  So the learner should understand:
  
  if the transcript is missing, the cDNA or protein description may be ambiguous.
  
  This matters because:
  
  • the same variant can look like different c. descriptions
  • one transcript may show a coding consequence while another may not
  • literature or database evidence may be missed if the transcript context is not matched properly
  
  That is why transcript identifiers matter in reports and annotation outputs.`
          },
          {
            title: "Why annotation context matters",
            body: `Annotation does not happen in a vacuum. Annotation tools depend on:
  
  • the reference build
  • the transcript set
  • the transcript ordering and prioritisation rules
  • the annotation database version
  
  Ensembl VEP documentation states that it can annotate variants using Ensembl/GENCODE or RefSeq transcript sets, supports both GRCh37 and GRCh38, and by default can report consequences across multiple transcripts that overlap the same variant.
  
  So the learner should understand:
  
  annotation output is shaped by the context and settings behind the annotation system.
  
  That means two annotation outputs may differ because:
  
  • they used different builds
  • they used different transcript sets
  • they used different transcript priorities
  • they applied different consequence-reporting choices
  
  This is not always an error. Often, it is a context difference that needs to be recognised explicitly.`
          },
          {
            title: "Why MANE matters for consistency",
            body: `One major reason clinical genomics has invested in MANE is to reduce inconsistency between transcript sources.
  
  NCBI states that MANE Select transcripts exactly match the GRCh38 human reference genome assembly and that MANE Select provides matched RefSeq and Ensembl/GENCODE transcripts. Ensembl also says MANE Select and MANE Plus Clinical provide pairs of RefSeq and Ensembl transcripts that are 100% identical in sequence and coordinates. The 2022 MANE paper explains that the goal is a unified stable clinical reporting standard.
  
  So the learner should understand:
  
  MANE helps make naming and annotation more consistent across major resources.
  
  That is especially important in clinical genomics because consistency improves:
  
  • evidence matching
  • communication
  • reporting
  • interoperability between databases and tools
  
  This is one of the reasons MANE appears so often in modern clinical genomics guidance.`
          },
          {
            title: "Why one transcript or one annotation output is not always enough",
            body: `A beginner may think:
  
  “If we have one default transcript and one annotation output, then the problem is solved.”
  
  That is too simple.
  
  The 2022 MANE paper explains that MANE Plus Clinical exists because one default transcript is not always enough to report all clinically relevant variants. Ensembl VEP also shows that one genomic variant can legitimately have multiple transcript-specific consequences.
  
  So the learner should understand:
  
  standardisation helps, but some clinically relevant variation still needs wider transcript awareness.
  
  That means the safest mindset is:
  
  • prefer consistent representative transcripts where appropriate
  • but remain aware that alternative transcripts may still matter in some cases.`
          },
          {
            title: "What can go wrong if the context is not stated clearly",
            body: `This is one of the most important professional lessons in the module.
  
  If build, transcript, or annotation context is unclear, real problems can happen:
  
  • the same variant may appear to “disagree” across reports
  • literature evidence may not be found because a different transcript description was used
  • a familial variant may be tracked using the wrong description
  • an annotation pipeline may be run on the wrong build
  • a consequence may be misunderstood because a different transcript was assumed
  
  Recent nomenclature standardisation literature warns that inconsistent variant descriptions can create real clinical risk, including missed evidence and false-negative familial testing if the wrong variant description is used. HGVS also emphasises the need for unique reference-sequence identifiers because interpretation depends on that stable context.
  
  So the learner should understand:
  
  missing context is not just untidy — it can be unsafe.`
          },
          {
            title: "Why this matters for clinical bioinformatics specifically",
            body: `Clinical bioinformatics often sits at the point where technical files and clinical meaning meet.
  
  That means the bioinformatician may need to:
  
  • recognise which build a VCF uses
  • know which transcript set an annotation pipeline is using
  • understand why one tool’s output does not match another exactly
  • communicate clearly what reference and transcript context underlies a variant description
  
  Ensembl VEP documentation makes this practical point very clear: you must choose the correct assembly, and annotation depends on transcript resources and cache versions. HGVS guidance makes the same point from the naming side: the reference sequence must be explicit.
  
  So the learner should understand:
  
  reference, transcript, and annotation context are core parts of safe bioinformatics practice, not just reporting details.`
          },
          {
            title: "The professional habit this module should build",
            body: `By the end of Module 9, the learner should start forming a very important habit:
  
  Whenever they see a variant description, they should ask:
  
  • what genome build is this on?
  • what reference sequence is being used?
  • what transcript is this relative to?
  • what annotation source or transcript set was used?
  • could a different context change how this variant is described or annotated?
  
  That is exactly the kind of context-aware thinking supported by HGVS recommendations, MANE, RefSeq, and Ensembl VEP.
  
  This is one of the strongest foundations for safe later work.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **In clinical genomics, a variant description is only fully meaningful when its reference genome build, reference sequence, transcript context, and annotation framework are clear, because changing any of these can change how the same biological variant is described or interpreted.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner compares two reports for what appears to be the same familial variant. One report gives one genomic coordinate on one build and a transcript-specific cDNA description, while the other report uses a different coordinate and a different c. description. The learner concludes that one of the reports must be wrong.
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because the reports may be using different context rather than describing different biology. If one report is using GRCh37 and the other GRCh38, the genomic coordinates can differ. If the reports also use different transcript references, the c. descriptions can differ too. HGVS states that a variant is defined in the context of a named reference sequence, and modern annotation tools are build-aware and transcript-aware. So before assuming the reports conflict, the safer approach is to check the build, transcript, and annotation context first.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A variant is not fully described just by giving a gene name or a coordinate. I need to know the genome build, the reference sequence, the transcript context, and the annotation framework, because changing those can change how the same biological variant is written and interpreted.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Clinical genomics depends on precise context because the same biological variant can look different depending on the genome build, transcript, and annotation system being used."
          }
        ],
        quiz: [
          {
            question:
              "Why is a genomic coordinate incomplete if the genome build is not stated?",
            options: [
              "Because chromosome names are enough on their own",
              "Because the same biological variant can have different genomic positions on different reference assemblies",
              "Because transcript choice makes build irrelevant",
              "Because coordinates are only used in research"
            ],
            answerIndex: 1,
            explanation:
              "GRCh37 and GRCh38 are different assemblies, so genomic positions are meaningful only relative to the build used."
          },
          {
            question:
              "Why can the same genomic variant have different cDNA descriptions in different reports?",
            options: [
              "Because cDNA numbering is random in different labs",
              "Because cDNA descriptions are defined relative to a chosen transcript reference sequence, and different transcripts can have different numbering systems",
              "Because only protein-coding genes have transcripts",
              "Because cDNA descriptions ignore exon structure"
            ],
            answerIndex: 1,
            explanation:
              "HGVS states that a variant is defined in the context of a reference sequence, and transcript choice can change the numbering and description."
          },
          {
            question: "What does MANE mainly help with?",
            options: [
              "Replacing the need for transcript identifiers",
              "Harmonising RefSeq and Ensembl/GENCODE transcript choices to improve consistency in clinical reporting",
              "Removing the need for genome builds",
              "Ensuring every variant has only one possible consequence"
            ],
            answerIndex: 1,
            explanation:
              "MANE provides matched RefSeq and Ensembl/GENCODE transcripts to support more consistent reporting and annotation."
          },
          {
            question: "What is the safest overall message of Module 9?",
            options: [
              "A variant name is usually clear enough even if the build and transcript are not stated",
              "Reference build, transcript, and annotation context can all change how a variant is described or annotated, so that context must be explicit in clinical genomics",
              "Annotation tools eliminate the need to think about transcripts",
              "One default transcript always solves every reporting problem"
            ],
            answerIndex: 1,
            explanation:
              "This is the integrated lesson of the module: context changes description and interpretation, so explicit context is essential for safe clinical work."
          }
        ]
      }
    ]
  };