export const module8 = {
    slug: "module-8",
    title: "Module 8: From sample to FASTQ, BAM/CRAM, and VCF",
    description:
      "Learn how a patient sample becomes sequencing data, what FASTQ, BAM/CRAM, and VCF contain, and why these files are different evidence layers in clinical bioinformatics.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: From sample to sequencing data — the big picture",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How does a patient sample become sequencing data, and where do FASTQ, BAM/CRAM, and VCF fit in that pathway?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How does a patient sample become sequencing data, and where do FASTQ, BAM/CRAM, and VCF fit in that pathway?”
  
  This lesson starts Module 8 because the learner now understands:
  
  • what genomic tests are
  • what they cover
  • what they are good at detecting
  • what they can miss
  
  The next step is to understand what happens after the test is chosen and the sample is processed.
  
  This is the practical pipeline lesson:
  
  how biological material becomes the digital files used in clinical bioinformatics.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A patient sample does not become a VCF directly. It passes through several stages, and each stage creates a different kind of data file.**
  
  A simple beginner pipeline looks like this:
  
  sample → sequencing reads → FASTQ → alignment to reference → BAM/CRAM → variant calling → VCF
  
  That is the core map for this module.
  
  So the key beginner message is:
  
  different files belong to different stages of the sequencing pipeline, and each file represents a different level of processing.`
          },
          {
            title: "The process starts with a biological sample",
            body: `Clinical genomic testing begins with a sample, not with a file.
  
  Depending on the pathway, that sample might be:
  
  • blood
  • saliva
  • tissue
  • another clinically appropriate specimen
  
  At this stage, the learner does not need detailed wet-lab workflows. The important point is that sequencing data begins as real biological material containing DNA.
  
  So the learner should understand:
  
  before there is any digital genomic data, there is a patient sample containing DNA that has to be extracted and prepared for sequencing.
  
  That is the physical starting point of the pipeline.`
          },
          {
            title: "Sequencing produces reads, not variants",
            body: `A very common beginner mistake is to imagine that sequencing machines directly output “the mutations.”
  
  That is not how it works.
  
  The first digital output of sequencing is usually a very large collection of short sequence reads. These are short stretches of DNA sequence generated from the sample.
  
  So the learner should understand:
  
  sequencing first produces reads, not final variant answers.
  
  Those reads are the raw material that later steps will analyse.
  
  This is important because it means:
  
  • variant calling comes later
  • alignment comes later
  • interpretation comes even later
  
  So the workflow is staged, not instantaneous.`
          },
          {
            title: "FASTQ is the raw read file stage",
            body: `Once sequencing reads are produced, they are commonly stored in FASTQ files.
  
  At beginner level, FASTQ should be understood as the file format that contains:
  
  • the read sequences
  • quality information about those reads
  
  So the learner should think:
  
  FASTQ = raw sequencing reads plus base-quality information
  
  This is usually one of the earliest major file types in the pipeline.
  
  A very important beginner point is that FASTQ is still close to the raw sequencing stage. It is not yet:
  
  • aligned to the genome
  • turned into genomic coordinates
  • reduced to a list of called variants
  
  So FASTQ is an early-stage data file, not a final interpretation file.`
          },
          {
            title: "Reads then have to be aligned to a reference genome",
            body: `Short reads on their own are just pieces of sequence. To understand where they came from in the genome, they usually need to be aligned or mapped to a reference genome.
  
  This is the step where the pipeline asks:
  
  “Where in the genome does each read most likely belong?”
  
  That is a crucial transition.
  
  Before alignment:
  
  • the data is mostly just read sequences
  
  After alignment:
  
  • the reads are connected to genomic positions
  
  So the learner should understand:
  
  alignment turns raw reads into position-aware data.
  
  This is what makes later genomic interpretation possible.`
          },
          {
            title: "BAM and CRAM are aligned read files",
            body: `Once reads are aligned to a reference genome, they are commonly stored as SAM/BAM/CRAM-type files.
  
  At beginner level, the learner mainly needs to know:
  
  • SAM = text alignment format
  • BAM = compressed binary version of SAM
  • CRAM = another compressed aligned-read format
  
  For the app, the important practical idea is:
  
  BAM/CRAM = aligned reads
  
  That means these files contain reads that have been placed against the reference genome, along with alignment-related information.
  
  So the learner should think:
  
  • FASTQ = raw reads
  • BAM/CRAM = mapped reads
  
  That distinction is one of the most important in the whole module.`
          },
          {
            title: "Variant calling comes after alignment",
            body: `Even once reads are aligned, the pipeline still has not yet produced the final list of candidate variants.
  
  The next major step is variant calling.
  
  This is the stage where the pipeline compares the aligned read evidence against the reference genome and asks:
  
  “Do the reads support a difference here?”
  
  So the learner should understand:
  
  variant calling happens after read generation and after alignment.
  
  This matters because a called variant is a summary built from earlier evidence. It is not the raw evidence itself.
  
  That is why later, in clinical bioinformatics, people may need to go back from a VCF to a BAM/CRAM to inspect the underlying read support.`
          },
          {
            title: "VCF is the called variant stage",
            body: `Once variants are called, they are commonly stored in a VCF file.
  
  At beginner level, the learner should understand:
  
  VCF = a file containing called variants
  
  That usually means:
  
  • positions where variation has been identified
  • reference and alternate alleles
  • genotype information
  • filters and annotations, depending on the pipeline
  
  But the key beginner point is:
  
  VCF is already a processed summary of candidate variants.
  
  It is not:
  
  • the original sample
  • the raw reads
  • the full alignment evidence
  
  So the learner should understand the progression:
  
  • FASTQ = raw reads
  • BAM/CRAM = aligned reads
  • VCF = called variant summary
  
  That three-step relationship is the backbone of the next lessons.`
          },
          {
            title: "Why these stages matter",
            body: `This lesson is not just about memorising file names.
  
  The reason these stages matter is that different questions belong to different pipeline levels.
  
  For example:
  
  • if you want to know about raw sequencing quality, FASTQ matters
  • if you want to inspect read support at a genomic position, BAM/CRAM matters
  • if you want to review the called list of candidate variants, VCF matters
  
  So the learner should understand:
  
  you cannot safely answer every bioinformatics question from every file type.
  
  That is why knowing the pipeline order matters so much.`
          },
          {
            title: "Why this matters in clinical bioinformatics",
            body: `This lesson is the bridge into the technical modules that follow.
  
  Later, the learner will need to understand:
  
  • QC
  • technical confidence
  • artefacts
  • visual review
  • filtering
  
  All of that depends on knowing where the evidence comes from in the pipeline.
  
  So the learner should form this habit early:
  
  before interpreting a genomic result, ask what stage of the pipeline the file represents.
  
  That is one of the most important practical habits in clinical bioinformatics.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A patient sample becomes sequencing reads, those reads are stored in FASTQ, aligned into BAM/CRAM, and then summarised into called variants in VCF, with each file representing a different stage of the pipeline.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “If I have a VCF, then I basically have all the sequencing data that matters.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because a VCF is only the called-variant summary stage of the pipeline. It comes after sequencing reads were generated and after those reads were aligned to the reference genome. The VCF does not replace the earlier stages, because FASTQ contains the raw reads and BAM/CRAM contains the aligned read evidence that may still need to be checked when reviewing technical confidence.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A sample does not become a variant list directly. Sequencing first produces reads in FASTQ, those reads are aligned into BAM/CRAM, and then candidate variants are called into VCF. Each file belongs to a different stage of the pipeline.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A patient sample does not become a VCF directly. It passes through several stages, and each stage creates a different kind of data file."
          }
        ],
        quiz: [
          {
            question: "What is the correct beginner pipeline order?",
            options: [
              "sample → VCF → FASTQ → BAM",
              "sample → FASTQ → BAM/CRAM → VCF",
              "sample → BAM → FASTQ → VCF",
              "sample → VCF → BAM/CRAM"
            ],
            answerIndex: 1,
            explanation:
              "The sample is sequenced into reads, reads are stored in FASTQ, aligned into BAM/CRAM, and variants are then called into VCF."
          },
          {
            question: "What does a FASTQ file mainly represent?",
            options: [
              "Final interpreted diagnosis",
              "Raw sequencing reads with quality information",
              "Aligned reads mapped to the reference genome",
              "Called structural variants only"
            ],
            answerIndex: 1,
            explanation:
              "FASTQ is the early-stage file containing read sequences and associated quality scores."
          },
          {
            question: "What is the main beginner meaning of BAM/CRAM?",
            options: [
              "Called variants",
              "Raw biological sample",
              "Aligned sequencing reads",
              "Final phenotype summary"
            ],
            answerIndex: 2,
            explanation:
              "BAM/CRAM files store reads after they have been mapped to positions in the reference genome."
          },
          {
            question: "Why is a VCF not the same as the raw sequencing data?",
            options: [
              "Because VCF is a processed summary of called variants, not the original reads or full alignment evidence",
              "Because VCF contains no genomic information at all",
              "Because VCF is only used in research",
              "Because VCF comes before sequencing"
            ],
            answerIndex: 0,
            explanation:
              "A VCF is a downstream summary created after earlier pipeline stages such as read generation and alignment."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: What is a FASTQ file?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a FASTQ file, what does it contain, and why is it such an important starting point in sequencing pipelines?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a FASTQ file, what does it contain, and why is it such an important starting point in sequencing pipelines?”
  
  This lesson follows the big-picture pipeline lesson because once the learner knows the basic flow:
  
  sample → reads → FASTQ → BAM/CRAM → VCF
  
  the next step is to understand the first major file type properly.
  
  FASTQ is one of the standard formats for storing sequencing read data. The original FASTQ format paper describes it as a common format for sharing sequencing read data that combines the sequence itself with an associated per-base quality score.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A FASTQ file stores raw sequencing reads and a quality score for each base in each read.** The FASTQ format paper describes FASTQ as a simple extension of FASTA that stores both sequence and associated quality scores, and ENA documentation states that read data in FASTQ must include Phred-scale quality scores.
  
  So the key beginner message is:
  
  FASTQ is an early-stage file that tells you what sequence was read and how confident the sequencer was about each base call.
  
  That is why FASTQ is such an important starting point for downstream bioinformatics.`
          },
          {
            title: "FASTQ is a raw read file, not a variant file",
            body: `A FASTQ file is still very close to the sequencing stage. It contains reads as they come off the sequencing instrument or early processing steps, before those reads have been aligned to a reference genome or summarised as called variants. The FASTQ paper describes it as a minimal representation of a sequencing read, and short-read workflows commonly use FASTQ as the input to alignment tools.
  
  So the learner should understand:
  
  • FASTQ is not a list of variants
  • FASTQ is not an aligned-read file
  • FASTQ is not a final interpretation file
  
  A useful beginner phrase is:
  
  FASTQ = raw reads plus quality, not genomic conclusions.`
          },
          {
            title: "What a read is",
            body: `A read is a short stretch of sequence generated by sequencing. FASTQ files usually contain very large numbers of reads, each representing one sequenced fragment or one end of a fragment in paired-end sequencing. The FASTQ paper describes the format as a representation of sequencing reads, and ENA documentation separately supports acceptance of both single and paired reads in FASTQ files.
  
  So the learner should think of FASTQ as:
  
  a large collection of many individual read records.
  
  Each record gives information about one read, not the whole genome in one continuous string.
  
  That is a very important mental model.`
          },
          {
            title: "What information a FASTQ record contains",
            body: `The classic FASTQ structure is built around four lines per read record. The FASTQ format description explains that a record contains:
  
  1. an identifier line beginning with @
  2. the sequence letters
  3. a separator line beginning with +
  4. the quality string, which has the same length as the sequence string
  
  So at beginner level, the learner should understand that every FASTQ read record contains two main biological things:
  
  • the sequence
  • the per-base quality information
  
  The identifier line is also important because it helps keep track of the read, but the sequence and quality are the main conceptual content for this stage.`
          },
          {
            title: "What the sequence line means",
            body: `The sequence line is the read itself, usually written as letters such as:
  
  A, C, G, T
  
  and sometimes N when the base is uncertain or unknown. The FASTQ literature describes the format as storing nucleotide sequence along with quality.
  
  So the learner should understand:
  
  the sequence line is the machine’s base-by-base readout for that fragment.
  
  But this sequence is still just a short read:
  
  • it is not yet aligned to a chromosome position
  • it is not yet interpreted as a variant
  • it is not yet summarised into a genotype call
  
  That is why FASTQ belongs early in the pipeline.`
          },
          {
            title: "What the quality line means",
            body: `This is one of the most important ideas in the lesson.
  
  FASTQ does not just store the read letters. It also stores a quality score for each base. The original FASTQ paper says the format stores a numeric quality score associated with each nucleotide in a sequence, and ENA documentation specifies that FASTQ quality scores are in Phred scale.
  
  So the learner should understand:
  
  a quality score is the sequencer’s confidence estimate for that base call.
  
  At beginner level, the important point is not memorising the exact score conversion formula. The important point is:
  
  • higher quality = more confidence in the base call
  • lower quality = less confidence in the base call
  
  That is why FASTQ matters so much in early QC.`
          },
          {
            title: "Why per-base quality matters",
            body: `Per-base quality matters because not all positions in a read are equally trustworthy. The FASTQ paper was created precisely to bundle sequence and base-quality information together, and this quality information is one reason FASTQ is useful for downstream processing.
  
  So the learner should understand:
  
  two reads with the same letters are not necessarily equally convincing if their base qualities differ.
  
  This matters later because:
  
  • low-quality bases can contribute to false calls
  • trimming or filtering may happen partly because of poor-quality sequence
  • downstream confidence begins here, not only at the variant-calling stage
  
  So FASTQ is important not just for “what was read,” but also for “how trustworthy that read looks.”`
          },
          {
            title: "FASTQ usually comes before alignment",
            body: `Short-read aligners commonly take FASTQ as input. The FASTQ paper presents FASTQ as a standard exchange format for sequencing read data, and common genomics file-format references distinguish FASTQ from SAM/BAM by noting that FASTQ stores sequences and quality while SAM/BAM stores alignments to a reference.
  
  So the learner should remember this pipeline step clearly:
  
  FASTQ comes before BAM/CRAM.
  
  That means:
  
  • FASTQ = reads before mapping
  • BAM/CRAM = reads after mapping
  
  This distinction is one of the most important in the whole module.`
          },
          {
            title: "What FASTQ does not tell you on its own",
            body: `A FASTQ file can tell you a lot about raw read content and raw read quality, but it does not tell you everything.
  
  By itself, FASTQ does not tell you:
  
  • where the read belongs in the genome
  • whether the read supports a true variant
  • what the genotype is at a locus
  • whether the variant caller ultimately accepted or rejected the evidence
  
  These limitations follow directly from the fact that FASTQ stores unaligned reads and quality scores, while alignment and variant calling happen later in the pipeline.
  
  So the learner should understand:
  
  FASTQ is powerful for raw data inspection, but it is not the file for answering every genomics question.
  
  This helps prevent a very common mistake: expecting FASTQ to function like a variant report.`
          },
          {
            title: "Why FASTQ matters in clinical bioinformatics",
            body: `FASTQ matters because it is the first major digital evidence layer in the sequencing pipeline. If there are problems early in the reads or their quality, those problems can affect everything that comes later:
  
  • alignment
  • coverage
  • variant calling
  • final interpretation
  
  So the learner should understand:
  
  FASTQ is one of the foundations of technical confidence, even though it is not where final clinical meaning is decided.
  
  That is why understanding FASTQ is essential before later modules on QC and technical confidence.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A FASTQ file stores raw sequencing reads together with a quality score for every base, making it the main early-stage file for representing what was read and how confident the sequencer was in each base call.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “If I have a FASTQ file, then I should already be able to tell which variants the patient has.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because FASTQ contains raw reads and per-base quality scores, not final variant calls. The reads have not yet been aligned to a reference genome, so the file does not directly tell you genomic positions or produce a called variant list. FASTQ is an early-stage file that supports later steps such as alignment and variant calling, but it is not itself a variant summary.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “FASTQ is the raw read file. It contains the read sequences and a quality score for each base, but it does not yet tell me where those reads map in the genome or which variants were finally called.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A FASTQ file stores raw sequencing reads and a quality score for each base in each read."
          }
        ],
        quiz: [
          {
            question: "What does a FASTQ file mainly contain?",
            options: [
              "Called variants and genotype summaries",
              "Raw sequencing reads and a quality score for each base",
              "Aligned read positions against the reference genome",
              "Final clinical interpretations of the sample"
            ],
            answerIndex: 1,
            explanation:
              "FASTQ stores sequence reads together with associated per-base quality scores."
          },
          {
            question: "Why is FASTQ considered an early-stage file in the pipeline?",
            options: [
              "Because it is created only after variant calling",
              "Because it stores reads before alignment to the reference genome",
              "Because it is used only for report writing",
              "Because it contains only phenotype data"
            ],
            answerIndex: 1,
            explanation:
              "FASTQ is a raw read format used before alignment, whereas SAM/BAM/CRAM stores alignments and VCF stores called variants."
          },
          {
            question: "What does the quality information in FASTQ represent?",
            options: [
              "The patient’s phenotype severity",
              "The confidence estimate for each base call",
              "The chromosomal position of each read",
              "The inheritance pattern of the variant"
            ],
            answerIndex: 1,
            explanation:
              "The FASTQ format stores a quality score associated with each nucleotide in the read, typically on the Phred scale."
          },
          {
            question: "Why can FASTQ not answer every genomics question on its own?",
            options: [
              "Because FASTQ contains no sequence information",
              "Because FASTQ does not yet show where reads align in the genome or which variants were finally called",
              "Because FASTQ is used only in research and not clinical genomics",
              "Because FASTQ is always smaller than BAM files"
            ],
            answerIndex: 1,
            explanation:
              "FASTQ stores raw reads and quality, but alignment and variant calling happen later. So it does not directly provide genomic coordinates or a called-variant summary."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: What are BAM and CRAM files?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What are BAM and CRAM files, what do they contain, and why are they different from FASTQ and VCF?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What are BAM and CRAM files, what do they contain, and why are they different from FASTQ and VCF?”
  
  This lesson follows the FASTQ lesson because once the learner understands that FASTQ contains raw sequencing reads and quality scores, the next step is to understand what happens after those reads are aligned to a reference genome.
  
  The main aligned-read formats used in genomics are SAM, BAM, and CRAM. The GA4GH specifications describe SAM as the Sequence Alignment/Map format, BAM as its binary equivalent, and CRAM as a compressed format for storing sequencing reads.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **BAM and CRAM files store sequencing reads after they have been aligned to a reference genome.**
  
  That is the main idea of this lesson.
  
  A useful beginner contrast is:
  
  • FASTQ = raw reads before alignment
  • BAM/CRAM = reads after alignment
  • VCF = called variants after variant calling
  
  A clinician’s guide to bioinformatics for next-generation sequencing describes BAM as the standard file format for storing short-read alignments and as the usual starting point for many downstream analysis tasks such as variant calling.
  
  So the key beginner message is:
  
  BAM/CRAM is where read evidence becomes position-aware.`
          },
          {
            title: "Why alignment changes the meaning of the data",
            body: `A FASTQ read is just a short sequence with quality scores. By itself, it does not tell you where in the genome the read came from.
  
  After alignment, the pipeline has attempted to place that read at a location in the reference genome. That is why BAM and CRAM are so important: they connect the raw read to genomic coordinates and alignment information. The SAM/BAM specifications are specifically alignment/map formats, and BAM is widely used to store those alignments.
  
  So the learner should understand:
  
  alignment turns raw sequence fragments into genomic evidence tied to a location.
  
  That is what makes later read-level review possible.`
          },
          {
            title: "What SAM, BAM, and CRAM are",
            body: `At beginner level, the easiest way to remember the three formats is:
  
  • SAM = text-based alignment format
  • BAM = binary version of SAM
  • CRAM = more highly compressed alignment format
  
  The canonical specifications state that SAM is the Sequence Alignment/Map format and BAM is its binary equivalent. GA4GH also describes CRAM as a compressed standard for storing sequencing reads, and HTSlib documentation explains that CRAM is primarily a reference-based compressed format.
  
  So the learner should think:
  
  SAM, BAM, and CRAM are closely related formats for aligned sequencing data.
  
  For practical clinical bioinformatics, the most common working files are usually BAM and CRAM, not plain-text SAM.`
          },
          {
            title: "Why BAM became so widely used",
            body: `BAM became popular because it stores alignment data more efficiently than plain-text SAM and supports practical downstream analysis. A clinician’s guide to bioinformatics explains that BAM has several advantages over SAM: it is compressed, convenient for transfer and storage, and supports indexing and random access so that regional information can be retrieved without loading the entire file.
  
  So the learner should understand:
  
  BAM is not a different kind of biological data from SAM — it is a more efficient way of storing the same kind of aligned-read information.
  
  That is why BAM became a standard working format across genomics.`
          },
          {
            title: "Why CRAM exists",
            body: `CRAM exists mainly to reduce storage burden further. GA4GH describes CRAM as the highly compressed version now transitioning toward the field’s preferred format for storing sequencing reads because it reduces file size and storage costs. HTSlib explains that CRAM is primarily reference-based compressed, meaning that only differences between the stored sequences and the reference are stored. A 2022 CRAM paper also describes CRAM as a high-compression alternative to BAM, with substantial size reduction.
  
  So the learner should understand:
  
  CRAM is mainly about more efficient storage of aligned-read data.
  
  A simple beginner phrase is:
  
  • BAM = aligned reads in a standard binary format
  • CRAM = aligned reads in a more compressed format.`
          },
          {
            title: "What information BAM and CRAM contain",
            body: `At beginner level, BAM and CRAM should be understood as containing much more than just the read letters.
  
  Aligned-read files can contain:
  
  • the read sequence
  • base qualities
  • the genomic position where the read was aligned
  • flags describing the read/alignment
  • pairing information for paired-end reads
  • mapping-related metadata
  • optional tags and sample-related metadata
  
  The SAM/BAM/CRAM specifications include alignment fields and standard optional tags, and teaching resources note that these formats retain alignment information along with qualities, pairing, and other metadata.
  
  So the learner should understand:
  
  BAM/CRAM contains aligned read evidence, not just sequence.
  
  That is exactly why these files are used for technical review and read-level inspection.`
          },
          {
            title: "What mapping or alignment information means",
            body: `A BAM or CRAM file tells you where a read was placed relative to the reference genome and how it aligned.
  
  At beginner level, the most important alignment-related ideas are:
  
  • which chromosome or contig the read mapped to
  • which position it mapped to
  • whether it mapped well or poorly
  • whether it is part of a read pair
  • whether there are mismatches, clipping, or other alignment features
  
  The SAM/BAM specifications and common genomics documentation describe BAM/CRAM as storing alignment records with the information needed to examine reads by genomic region.
  
  So the learner should understand:
  
  BAM/CRAM is the file where sequence becomes inspectable genomic evidence.
  
  That is a major step forward from FASTQ.`
          },
          {
            title: "Why indexing matters",
            body: `One major practical advantage of BAM and CRAM is that they can be indexed. The SAM/BAM specifications define indexing formats such as BAI, and clinical bioinformatics guides explain that indexed BAM supports random access so you can retrieve reads from a selected genomic region without reading the whole file. HTSlib documentation for samtools view also notes that regional retrieval requires indexed BAM or CRAM input.
  
  So the learner should understand:
  
  indexing is what makes it practical to inspect one genomic region at a time.
  
  This matters later because tools like genome browsers and read-level review depend on rapid regional access rather than scanning the whole alignment file.`
          },
          {
            title: "Why BAM/CRAM is different from FASTQ",
            body: `This distinction is one of the most important in Module 8.
  
  A FASTQ file stores raw reads and per-base quality scores, but not genomic placement.
  
  A BAM/CRAM file stores reads after they have been aligned to the reference genome.
  
  That means BAM/CRAM can answer questions that FASTQ cannot answer easily, such as:
  
  • what reads support this position?
  • how many reads overlap this locus?
  • do the reads align cleanly here?
  • is the evidence on both strands?
  • are there suspicious alignment patterns?
  
  These questions become possible precisely because BAM/CRAM includes genomic location and alignment context.
  
  So the learner should remember:
  
  FASTQ is pre-alignment; BAM/CRAM is post-alignment.`
          },
          {
            title: "Why BAM/CRAM is different from VCF",
            body: `This distinction is equally important.
  
  A BAM/CRAM file contains the underlying aligned reads.
  
  A VCF file contains the summarised set of called variants derived from analysis of those reads.
  
  The BAM file is therefore evidence-level data, while the VCF is call-level data. Best-practice guidance for NGS bioinformatics pipelines notes that variant callers usually take aligned reads in BAM or similar format as input in order to identify sequence variants.
  
  So the learner should understand:
  
  VCF is a summary built from BAM/CRAM evidence; it is not a replacement for the evidence itself.
  
  That is why later technical review may need to go back from a VCF call to the BAM/CRAM.`
          },
          {
            title: "Why BAM/CRAM matters in clinical bioinformatics",
            body: `BAM and CRAM matter because they are often the key evidence files used for:
  
  • regional review
  • investigating suspicious calls
  • checking read support
  • understanding technical artefacts
  • supporting variant calling and downstream confidence
  
  A clinician’s guide to bioinformatics describes BAM as the usual starting point for many NGS analysis tasks, and BAM/CRAM’s regional accessibility is central to inspection workflows.
  
  So the learner should understand:
  
  BAM/CRAM is where many technical-confidence questions are answered.
  
  That makes it one of the most important file types in later QC and evidence-checking modules.`
          },
          {
            title: "What BAM/CRAM does not tell you on its own",
            body: `Although BAM/CRAM is richer than FASTQ in terms of genomic context, it still does not automatically give the final clinical answer.
  
  By itself, BAM/CRAM does not tell you:
  
  • which variants were ultimately called or filtered
  • whether a variant is pathogenic
  • whether the phenotype fits
  • what the final report conclusion should be
  
  Those questions require later pipeline steps and broader clinical interpretation. BAM/CRAM provides aligned evidence, not final clinical meaning.
  
  So the learner should understand:
  
  BAM/CRAM is an evidence file, not a diagnosis file.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **BAM and CRAM files store sequencing reads after alignment to a reference genome, making them the key file types for inspecting read-level evidence at genomic positions, while CRAM mainly differs by using stronger compression than BAM.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “If I already have a BAM file, then I no longer need to think about FASTQ, and BAM is basically the same thing as a VCF but bigger.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because BAM, FASTQ, and VCF represent different stages of the pipeline. FASTQ is the raw read stage, BAM is the aligned-read stage, and VCF is the called-variant stage. BAM is not just a bigger VCF: it contains the aligned reads and their evidence, which variant callers and later reviewers can use to assess support for a candidate variant. That is why BAM/CRAM is so important for technical review and why it cannot simply be treated as the same kind of file as a VCF.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “BAM and CRAM are aligned-read files. They contain reads after mapping to a reference genome, so they let me inspect evidence at genomic positions. They are different from FASTQ, which is pre-alignment, and from VCF, which is the called-variant summary.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "BAM and CRAM files store sequencing reads after they have been aligned to a reference genome."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner definition of BAM and CRAM files?",
            options: [
              "Files that store called variants after filtering",
              "Files that store sequencing reads after alignment to a reference genome",
              "Files that store raw reads before alignment",
              "Files that contain only phenotype annotations"
            ],
            answerIndex: 1,
            explanation:
              "SAM/BAM/CRAM are alignment formats; BAM is the binary equivalent of SAM, and CRAM is a compressed aligned-read format."
          },
          {
            question: "What is the main practical difference between BAM and CRAM?",
            options: [
              "BAM stores only variants, while CRAM stores only reads",
              "CRAM is a more highly compressed aligned-read format, often using reference-based compression",
              "BAM is text and CRAM is the only binary format",
              "BAM is for exomes only, while CRAM is for genomes only"
            ],
            answerIndex: 1,
            explanation:
              "GA4GH and HTSlib describe CRAM as a compressed, largely reference-based alternative to BAM for storing sequencing reads."
          },
          {
            question:
              "Why can BAM/CRAM answer questions that FASTQ cannot answer easily?",
            options: [
              "Because BAM/CRAM includes genomic alignment positions and alignment context",
              "Because FASTQ contains no sequence data",
              "Because FASTQ is used only in research",
              "Because BAM/CRAM directly contains the final diagnosis"
            ],
            answerIndex: 0,
            explanation:
              "FASTQ stores raw reads and quality, while BAM/CRAM stores aligned reads tied to genomic positions, which enables region-based review."
          },
          {
            question: "Why is BAM/CRAM not the same as a VCF?",
            options: [
              "Because BAM/CRAM contains aligned read evidence, while VCF contains summarised called variants derived from that evidence",
              "Because BAM/CRAM is only used in research and VCF is only used clinically",
              "Because VCF contains all reads and BAM/CRAM contains only annotations",
              "Because BAM/CRAM comes after VCF in the pipeline"
            ],
            answerIndex: 0,
            explanation:
              "Variant callers typically use aligned reads in BAM or similar formats as input to identify sequence variants, which are then summarised in VCF."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: What is a VCF file?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a VCF file, what does it contain, and why is it different from FASTQ and BAM/CRAM?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a VCF file, what does it contain, and why is it different from FASTQ and BAM/CRAM?”
  
  This lesson follows the BAM/CRAM lesson because once the learner understands that sequencing reads are aligned to a reference genome, the next major step is to understand how candidate genomic differences are recorded.
  
  The main standard format for this is the VCF, or Variant Call Format. GA4GH describes VCF as a text file format for storing genetic variation data, with data lines describing a variant’s position on the genome.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A VCF file stores called genomic variants, not raw reads and not full alignment evidence.** GA4GH describes VCF as the standard text format for storing genetic variation data, and the formal specification is maintained through the HTS/GA4GH standards process.
  
  So the key beginner message is:
  
  VCF is a processed variant-summary file.
  
  It sits later in the pipeline than:
  
  • FASTQ, which stores raw reads and quality
  • BAM/CRAM, which stores aligned reads
  
  That is one of the most important distinctions in Module 8.`
          },
          {
            title: "Where VCF sits in the pipeline",
            body: `A useful beginner pipeline map is:
  
  sample → FASTQ → BAM/CRAM → variant calling → VCF
  
  The VCF is produced after variant calling, which means the aligned read evidence has already been processed into candidate sequence differences relative to the reference genome. A clinician’s guide to NGS bioinformatics describes aligned reads in BAM as a standard starting point for downstream analysis and explains that such data feed into later steps like variant calling.
  
  So the learner should understand:
  
  VCF comes after read generation and after alignment.
  
  That means:
  
  • it is not the first evidence file
  • it is not the raw data
  • it is the summarised output of a later pipeline step.`
          },
          {
            title: "What kinds of things VCF can represent",
            body: `VCF can represent many kinds of genetic variation. GA4GH says VCF can encode small variants such as SNPs and short indels, as well as larger rearrangements and larger indels. UCSC’s VCF documentation also describes VCF as an all-purpose format for defining variants of all types, including SNVs, CNVs, and translocations relative to a reference assembly.
  
  So the learner should understand:
  
  VCF is not only for single-base changes.
  
  It can store records for:
  
  • SNVs
  • small indels
  • some larger structural events
  • other variant representations, depending on how the caller and pipeline encode them
  
  That does not mean every pipeline uses VCF equally well for every variant class, but it does mean the format is broader than many beginners first assume.`
          },
          {
            title: "What information a VCF record contains",
            body: `At beginner level, each VCF record should be thought of as a site-based variant summary.
  
  GA4GH says VCF data lines describe a variant’s position on the genome, and the formal VCF specification includes core fields such as chromosome, position, reference allele, alternate allele, quality, filter, information fields, and optionally per-sample genotype columns.
  
  So the learner should understand that a typical VCF record usually contains things like:
  
  • the chromosome or contig
  • the genomic position
  • the reference allele
  • the alternate allele
  • site-level quality/filter information
  • extra INFO annotations
  • per-sample genotype data if samples are included
  
  A useful beginner phrase is:
  
  VCF = genomic position plus called variation plus supporting summary fields.`
          },
          {
            title: "What REF and ALT mean",
            body: `Two of the most important VCF fields are REF and ALT.
  
  At beginner level:
  
  • REF means the reference allele at that genomic position
  • ALT means the alternate allele or alleles observed or called in the sample relative to the reference
  
  The VCF specification and example documentation use these fields as core parts of every variant record.
  
  So the learner should understand:
  
  VCF is fundamentally about describing how a sample differs from the reference genome at a given site.
  
  That means VCF is a difference-focused format, not a full genome-sequence format.`
          },
          {
            title: "What genotype information means in a VCF",
            body: `Many VCF files also include sample genotype information.
  
  The VCF specification defines a FORMAT column followed by sample columns, and common genotype fields include items like:
  
  • GT for genotype
  • GQ for genotype quality
  • DP for read depth
  
  So the learner should understand:
  
  VCF can contain both site-level variant information and sample-level genotype summaries.
  
  For a beginner, that means the VCF can often tell you not just:
  
  • “there is a variant here”
  
  but also:
  
  • “what genotype did the pipeline assign to this sample at this site?”
  
  That is one reason VCF becomes so central in downstream filtering and prioritisation.`
          },
          {
            title: "Why VCF is a summary, not the evidence itself",
            body: `This is one of the most important ideas in the lesson.
  
  A VCF record is a call made from underlying evidence. It is not the full underlying evidence itself.
  
  A clinician’s guide to NGS bioinformatics explains the distinction between aligned-read files and later downstream outputs, and VCF is the standard format for the latter. The BAM contains the aligned reads; the VCF contains the summarised called variants derived from that evidence.
  
  So the learner should understand:
  
  VCF tells you what the pipeline decided to call, not everything the reads looked like.
  
  That is why later modules will teach that:
  
  • suspicious VCF findings may need BAM review
  • absence from a VCF does not always mean total absence of any relevant read evidence
  • technical confidence cannot always be judged from VCF alone
  
  This is a crucial professional habit.`
          },
          {
            title: "Why VCF is different from FASTQ",
            body: `A FASTQ file contains raw sequence reads and per-base quality scores.
  
  A VCF file contains processed called variants relative to the reference genome.
  
  So FASTQ answers questions like:
  
  • what reads were generated?
  • what did the sequencer call at the read level?
  • how confident were the base calls?
  
  VCF answers very different questions, such as:
  
  • what variant sites were called?
  • what alleles were reported?
  • what genotype did the pipeline assign?
  
  So the learner should remember:
  
  FASTQ is raw-read data; VCF is variant-call data.
  
  They are not interchangeable.`
          },
          {
            title: "Why VCF is different from BAM/CRAM",
            body: `A BAM/CRAM file contains aligned reads.
  
  A VCF file contains the variant calls summarised from those aligned reads.
  
  This means BAM/CRAM is usually the file for:
  
  • checking read support
  • looking for strand bias
  • inspecting mapping patterns
  • visually reviewing evidence at a site
  
  VCF is usually the file for:
  
  • reviewing the called variant list
  • filtering variants
  • looking at genotype fields
  • passing candidate calls into downstream prioritisation
  
  So the learner should understand:
  
  BAM/CRAM is evidence-level; VCF is call-level.
  
  That distinction is one of the most important in practical clinical bioinformatics.`
          },
          {
            title: "What VCF does not tell you on its own",
            body: `A VCF can tell you a great deal, but it does not tell you everything.
  
  By itself, a VCF does not fully tell you:
  
  • whether the raw reads were of good quality
  • whether alignment at the site was clean or suspicious
  • whether a call is biologically meaningful for the phenotype
  • whether the variant is pathogenic
  • whether a non-called site had weak underlying evidence that failed the caller’s thresholds
  
  These limits follow from the fact that VCF is a summary of called variation rather than the full raw and aligned data.
  
  So the learner should understand:
  
  VCF is central to downstream genomics, but it is not the whole story.
  
  That is why later interpretation often requires:
  
  • phenotype context
  • filtering context
  • BAM/CRAM review
  • and sometimes knowledge of assay limitations.`
          },
          {
            title: "Why VCF matters in clinical bioinformatics",
            body: `VCF matters because it is one of the main working files for downstream analysis. It is the usual format for:
  
  • variant filtering
  • annotation
  • genotype review
  • prioritisation
  • handoff into later clinical interpretation workflows
  
  GA4GH explicitly describes VCF as the standard format for storing variation data, and a 2023 GA4GH article notes its importance for storing and transferring variation information in genomics workflows.
  
  So the learner should understand:
  
  VCF is often the main file where candidate variants are reviewed as a set.
  
  That is why the learner needs to understand it well before moving into filtering and prioritisation modules.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A VCF file stores called genomic variants as differences from the reference genome, together with summary fields such as position, alleles, filters, annotations, and often sample genotype information, making it the key call-level file for downstream variant analysis.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “If the variant is in the VCF, then I already know everything important about the evidence and do not need any other file.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because a VCF is a called-variant summary, not the full underlying evidence. It tells you what variant the pipeline reported and often gives genotype and filter information, but it does not replace the aligned-read evidence stored in BAM/CRAM or the earlier raw-read stage in FASTQ. If a variant is suspicious or technically uncertain, the BAM/CRAM may still need to be reviewed to see what the read support actually looks like.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A VCF is the called-variant file. It tells me what genomic differences the pipeline reported relative to the reference genome, but it does not replace the aligned-read evidence in BAM/CRAM or the raw-read data in FASTQ.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A VCF file stores called genomic variants, not raw reads and not full alignment evidence."
          }
        ],
        quiz: [
          {
            question: "What is the main beginner meaning of a VCF file?",
            options: [
              "A file of raw sequencing reads",
              "A file of aligned reads with genomic positions",
              "A file of called variants relative to the reference genome",
              "A file containing only phenotype information"
            ],
            answerIndex: 2,
            explanation:
              "GA4GH describes VCF as a text file format for storing genetic variation data."
          },
          {
            question:
              "Which statement best describes the relationship between BAM/CRAM and VCF?",
            options: [
              "They are two names for the same file type",
              "BAM/CRAM stores aligned read evidence, while VCF stores summarised variant calls derived from that evidence",
              "VCF stores raw reads, while BAM/CRAM stores phenotype annotations",
              "BAM/CRAM comes after VCF in the pipeline"
            ],
            answerIndex: 1,
            explanation:
              "BAM/CRAM is the aligned-read stage, and VCF is the called-variant stage that comes later."
          },
          {
            question: "What do the REF and ALT fields in a VCF represent?",
            options: [
              "The sequencing chemistry and machine model",
              "The reference allele and the alternate allele(s) at a genomic site",
              "The raw and trimmed read versions",
              "The phenotype and inheritance model"
            ],
            answerIndex: 1,
            explanation:
              "The VCF specification uses REF and ALT as core fields describing the reference allele and the alternate allele(s) at the site."
          },
          {
            question: "Why can a VCF not answer every technical question on its own?",
            options: [
              "Because VCF contains no genomic coordinates",
              "Because VCF is a summary of called variants and does not fully show the underlying read-level evidence or raw read quality",
              "Because VCF is only used in research",
              "Because VCF always includes the final clinical diagnosis"
            ],
            answerIndex: 1,
            explanation:
              "VCF is a call-level summary. Technical review may still require BAM/CRAM for read evidence and earlier pipeline context for raw data quality."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: Why these files are not interchangeable",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why are FASTQ, BAM/CRAM, and VCF not interchangeable, and why does each file answer a different kind of question?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why are FASTQ, BAM/CRAM, and VCF not interchangeable, and why does each file answer a different kind of question?”
  
  This lesson follows the individual file lessons because the learner has now seen:
  
  • FASTQ as the raw read file
  • BAM/CRAM as the aligned read file
  • VCF as the called variant file
  
  The next step is to make the most important practical lesson explicit:
  
  these files are related, but they are not interchangeable.
  
  Each one belongs to a different stage of the sequencing pipeline and represents a different level of processing. FASTQ stores raw read data with qualities, SAM/BAM/CRAM store alignments, and VCF stores called variants.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **FASTQ, BAM/CRAM, and VCF are different file types because they represent different questions being answered at different points in the pipeline.**
  
  A simple way to say it is:
  
  • FASTQ asks: what was read, and how confident were the base calls?
  • BAM/CRAM asks: where do those reads align in the genome, and what does the read-level evidence look like there?
  • VCF asks: what variants did the pipeline call from that evidence?
  
  So the key beginner message is:
  
  the file type determines what kind of question it can answer well.
  
  That is why these files cannot safely replace one another.`
          },
          {
            title: "FASTQ, BAM/CRAM, and VCF belong to different pipeline stages",
            body: `The easiest way to understand why the files are different is to place them back into the pipeline:
  
  sample → FASTQ → BAM/CRAM → VCF
  
  That order matters because each file is created from the previous stage:
  
  • sequencing produces reads in FASTQ
  • alignment produces BAM/CRAM
  • variant calling produces VCF
  
  So the learner should understand:
  
  a later file is more processed than an earlier one.
  
  That means a VCF is not just “another view” of a FASTQ. It is a later-stage summary built from earlier evidence.`
          },
          {
            title: "FASTQ is the file for raw read content and base quality",
            body: `FASTQ is the file for questions about raw sequencing output. The FASTQ format combines the sequence read itself with per-base quality information.
  
  So FASTQ is the right file when the question is closer to:
  
  • what reads were generated?
  • what bases were called in each read?
  • how confident was the sequencer at each base?
  
  But FASTQ is not the right file for questions like:
  
  • what chromosome position is this read at?
  • how many reads support this genomic locus?
  • what genotype was called here?
  
  Those questions need later pipeline stages.
  
  So the learner should understand:
  
  FASTQ is strong for raw read and base-quality questions, but weak for genomic-position and variant-summary questions.`
          },
          {
            title: "BAM/CRAM is the file for aligned read evidence",
            body: `BAM and CRAM are aligned-read formats. They store sequencing reads after mapping to a reference genome and include positional and alignment information. SAM is the text alignment format, BAM its binary equivalent, and CRAM a more compressed aligned-read standard.
  
  So BAM/CRAM is the right file when the question is closer to:
  
  • where do the reads map?
  • how many reads overlap this site?
  • do the reads support the variant on both strands?
  • does the alignment look clean or suspicious?
  • are there signs of mapping problems or artefacts?
  
  But BAM/CRAM is not the main file for:
  
  • reviewing the final filtered list of candidate variants across the case
  • quickly scanning all called variants in a compact summary form
  
  That is where VCF becomes more useful.
  
  So the learner should understand:
  
  BAM/CRAM is the evidence-level file for genomic positions, not the final variant-summary file.`
          },
          {
            title: "VCF is the file for called variant summaries",
            body: `VCF is the standard format for storing genetic variation data, with records describing a variant’s genomic position and associated summary information. It commonly includes fields such as chromosome, position, reference allele, alternate allele, filter/status information, INFO annotations, and sample genotype fields.
  
  So VCF is the right file when the question is closer to:
  
  • what variants were called?
  • what alleles were reported?
  • what genotype was assigned?
  • which variants passed or failed filters?
  • what summary annotations are attached to each variant?
  
  But VCF is not the main file for:
  
  • checking raw base qualities
  • inspecting exact read alignment patterns
  • understanding all the read-level reasons why a call looks convincing or suspicious
  
  Those questions often need BAM/CRAM, and sometimes FASTQ.
  
  So the learner should understand:
  
  VCF is the call-level summary file, not the full underlying evidence file.`
          },
          {
            title: "Why a VCF cannot replace BAM/CRAM",
            body: `This is one of the most important ideas in the module.
  
  A beginner may think:
  
  “If the variant is in the VCF, then that is enough.”
  
  That is too simple.
  
  A VCF tells you what the pipeline called, but not necessarily what the aligned evidence looked like in full detail. BAM/CRAM contains the reads from which the call was derived, and variant-calling workflows commonly use SAM/BAM as input and generate VCF as output.
  
  So if a variant looks suspicious, borderline, or technically weak, BAM/CRAM may still need to be reviewed to ask:
  
  • is there clean read support?
  • are the reads biased to one strand?
  • do the reads cluster at read ends?
  • does the alignment look unreliable?
  
  So the learner should understand:
  
  VCF cannot replace BAM/CRAM when the question is really about read-level evidence.`
          },
          {
            title: "Why BAM/CRAM cannot replace FASTQ",
            body: `Another beginner mistake is to assume that BAM/CRAM makes FASTQ irrelevant.
  
  That is also too simple.
  
  BAM/CRAM contains aligned reads, but FASTQ still represents the earlier raw read stage and original base-quality information as it entered the alignment process. BAM retains a lot of sequence and quality information, but the key lesson here is conceptual:
  
  BAM/CRAM is post-alignment; FASTQ is pre-alignment.
  
  So if the question is specifically about:
  
  • the raw sequencing reads before mapping
  • early read-quality characteristics
  • how the data looked before alignment assumptions were applied
  
  then FASTQ still has its own role.
  
  So the learner should understand:
  
  BAM/CRAM does not make FASTQ meaningless; it represents a later processed stage.`
          },
          {
            title: "Why the same genomic question may need more than one file",
            body: `In real clinical bioinformatics, one question may lead across multiple file types.
  
  For example:
  
  Question: “Is this candidate variant technically convincing?”
  
  That might involve:
  
  • checking the VCF to see what the caller reported
  • checking the BAM/CRAM to inspect read support
  • and, in some situations, understanding whether earlier raw read quality from FASTQ could have contributed to problems
  
  So the learner should understand:
  
  real genomics questions are often file-stage questions, not just file-format questions.
  
  That is a very useful professional mindset.`
          },
          {
            title: "Why looking at the wrong file can lead to mistakes",
            body: `This lesson matters because using the wrong file for the wrong question can produce unsafe conclusions.
  
  Examples:
  
  • expecting FASTQ to tell you the final genotype
  • expecting BAM/CRAM to function like a compact candidate-variant list
  • expecting VCF alone to settle all technical-confidence questions
  
  All of those misunderstand what each file is for. The standards and workflow literature make clear that these formats exist for different stages and different purposes.
  
  So the learner should understand:
  
  good interpretation starts with choosing the right file for the right question.
  
  That is one of the most important practical lessons in Module 8.`
          },
          {
            title: "Why this matters in clinical bioinformatics",
            body: `This lesson is a bridge into the next technical modules.
  
  Later, the learner will work on:
  
  • QC
  • technical confidence
  • visual review
  • filtering
  • artefact recognition
  
  Those all depend on knowing:
  
  • which file holds raw read information
  • which file holds aligned evidence
  • which file holds called variant summaries
  
  So the learner should form this habit:
  
  before trying to answer a genomics question, first ask which file stage that question belongs to.
  
  That is a core clinical bioinformatics mindset.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **FASTQ, BAM/CRAM, and VCF are not interchangeable because they represent different stages of the sequencing pipeline and answer different kinds of questions: raw reads, aligned read evidence, and called variant summaries.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “If a variant is not obvious in the VCF, I’ll just inspect the FASTQ to decide whether it’s real — there’s no real need to think about BAM.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because FASTQ, BAM/CRAM, and VCF play different roles. FASTQ contains raw reads and base qualities, VCF contains called variant summaries, and BAM/CRAM contains the aligned read evidence at genomic positions. If the question is whether a candidate variant has convincing read support at a specific locus, BAM/CRAM is usually the key file because it lets you inspect reads in their genomic alignment context. A VCF may tell you what the caller reported, and FASTQ may tell you about raw read quality, but BAM/CRAM is usually the main file for read-level evidence at a position.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “FASTQ is the raw read file, BAM/CRAM is the aligned evidence file, and VCF is the called-variant summary file. I should not expect one of these files to answer questions that really belong to another pipeline stage.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "FASTQ, BAM/CRAM, and VCF are different file types because they represent different questions being answered at different points in the pipeline."
          }
        ],
        quiz: [
          {
            question:
              "Which file is usually the best starting point for a question about raw read content and per-base quality?",
            options: ["VCF", "BAM/CRAM", "FASTQ", "Phenotype table"],
            answerIndex: 2,
            explanation:
              "FASTQ stores raw sequencing reads and per-base quality information."
          },
          {
            question:
              "Which file is usually the best starting point for inspecting read support at a specific genomic locus?",
            options: ["FASTQ", "BAM/CRAM", "VCF only", "A pedigree file"],
            answerIndex: 1,
            explanation:
              "BAM/CRAM stores aligned reads with genomic positions, which makes it the main evidence-level file for regional review."
          },
          {
            question:
              "Which file is usually the best starting point for reviewing the called list of candidate variants across a case?",
            options: ["FASTQ", "BAM/CRAM", "VCF", "Reference genome FASTA"],
            answerIndex: 2,
            explanation:
              "VCF is the standard format for storing called genetic variation data."
          },
          {
            question: "Why are these files not interchangeable?",
            options: [
              "Because they contain identical information in different compression formats",
              "Because they belong to different pipeline stages and represent raw reads, aligned evidence, and called variants respectively",
              "Because only one of them is used in clinical genomics",
              "Because each one is tied to a different disease specialty"
            ],
            answerIndex: 1,
            explanation:
              "The core lesson of the module is that the files represent different levels of processing and therefore answer different questions."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: Why this file flow matters in clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why does the flow from FASTQ to BAM/CRAM to VCF matter in clinical bioinformatics, and why is it unsafe to interpret results without knowing which pipeline stage a file represents?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why does the flow from FASTQ to BAM/CRAM to VCF matter in clinical bioinformatics, and why is it unsafe to interpret results without knowing which pipeline stage a file represents?”
  
  This lesson finishes Module 8 by tying the file formats back to real clinical bioinformatics work. The learner has now seen:
  
  • FASTQ = raw reads with quality scores
  • BAM/CRAM = aligned reads
  • VCF = called variant summaries
  
  Standards and workflow literature describe this sequence clearly: raw sequence data in FASTQ are aligned to a reference to produce BAM, and variant calling from aligned reads produces VCF output.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **These files matter because each one represents a different level of evidence, and safe clinical bioinformatics depends on knowing which level of evidence you are looking at.**
  
  A simple way to think about it is:
  
  • FASTQ tells you what was read and how confident the base calls were
  • BAM/CRAM tells you where those reads aligned and what the read-level evidence looks like at a genomic site
  • VCF tells you what variants the pipeline called from that evidence
  
  So the key beginner message is:
  
  clinical bioinformatics is safer when you know whether you are looking at raw data, aligned evidence, or summarised calls.`
          },
          {
            title: "Why pipeline stage matters more than file names alone",
            body: `A beginner might memorise:
  
  • FASTQ
  • BAM
  • CRAM
  • VCF
  
  but still miss the real point.
  
  The important thing is not just the names. The important thing is the pipeline stage each file belongs to:
  
  • sequencing output
  • alignment output
  • variant-calling output
  
  So the learner should understand:
  
  the same biological question may need different files depending on which stage of evidence is relevant.
  
  That is why the module has focused so heavily on flow, not just format definitions.`
          },
          {
            title: "Why QC starts early, not late",
            body: `One of the most important practical lessons in clinical bioinformatics is that technical problems can begin early and affect everything downstream.
  
  If raw reads are poor, that may affect:
  
  • alignment quality
  • coverage
  • variant calling
  • final confidence in reported variants
  
  FASTQ exists precisely because raw reads and base-quality scores matter as an early evidence layer, and BAM/CRAM later carries forward the aligned consequences of that early data.
  
  So the learner should understand:
  
  you cannot think about technical confidence only at the VCF stage.
  
  Confidence begins earlier in the pipeline.
  
  That idea is a direct bridge into the later QC modules.`
          },
          {
            title: "Why BAM/CRAM matters for technical review",
            body: `A VCF may tell you that a variant was called, but BAM/CRAM lets you inspect the aligned evidence behind that call.
  
  That is important because technical review often depends on questions like:
  
  • how many reads support the site?
  • is support seen on both strands?
  • do the reads align cleanly?
  • are there suspicious mapping patterns?
  • does the site look technically convincing or weak?
  
  BAM is widely described as the standard alignment format for downstream analysis, and BAM/CRAM exists precisely so aligned evidence can be stored and inspected.
  
  So the learner should understand:
  
  BAM/CRAM is often the key file for investigating whether a VCF call looks technically believable.
  
  That is why BAM/CRAM becomes so important later in visual review and artefact checking.`
          },
          {
            title: "Why VCF is powerful but incomplete",
            body: `VCF is extremely useful because it gives a structured summary of the variants the pipeline decided to call. GA4GH describes VCF as the standard format for storing genetic variation data, and the specification includes site-level and genotype-level fields that make downstream review practical.
  
  But the learner should also understand:
  
  VCF is not the whole truth about the evidence.
  
  A VCF can tell you:
  
  • what site was called
  • what allele was reported
  • what genotype was assigned
  • what filters or annotations are attached
  
  But it cannot fully replace:
  
  • raw read quality from FASTQ
  • read-level mapping evidence from BAM/CRAM
  
  So the learner should understand:
  
  VCF is central, but it is still a summary layer.`
          },
          {
            title: "Why negative findings must be read in pipeline context",
            body: `A very important clinical bioinformatics mistake would be to say:
  
  “It’s not in the VCF, so it isn’t there.”
  
  That is too simple.
  
  A variant may fail to appear in a VCF for many reasons, including:
  
  • poor raw read support
  • weak or ambiguous alignment
  • caller thresholds
  • filtering choices
  • assay limitations
  
  Workflow literature and clinical pipeline guidance show that the path from FASTQ to BAM to VCF is not magic; it is a sequence of processing steps that can affect what is eventually called.
  
  So the learner should understand:
  
  absence from a VCF is a later-stage observation, not always proof of total biological absence.
  
  That is one of the most important reasons to understand the whole file flow.`
          },
          {
            title: "Why file provenance matters",
            body: `A file is more useful when you know where it came from.
  
  For example:
  
  • was this VCF generated from a focused panel, exome, or genome pipeline?
  • was this BAM derived from short-read data aligned to a particular reference genome?
  • what pipeline stage or assay assumptions shaped what is in the file?
  
  The earlier module already taught that assay choice matters. This module now adds the next layer:
  
  file meaning also depends on provenance within that assay’s pipeline.
  
  So the learner should start building this habit:
  
  Before trusting a file, ask:
  
  • what stage is it from?
  • what produced it?
  • what evidence level does it represent?
  
  That is a core clinical bioinformatics mindset.`
          },
          {
            title: "Why this matters for communication and escalation",
            body: `Understanding file flow is not just technically useful. It also supports safer communication.
  
  For example, if a colleague asks:
  
  “How confident are we in this variant?”
  
  the answer may depend on which file you are talking about:
  
  • VCF may show the call and summary metrics
  • BAM/CRAM may show whether the read evidence is convincing
  • FASTQ may still matter if there are concerns about raw read quality
  
  So the learner should understand:
  
  good communication in clinical bioinformatics often depends on being able to explain what stage of evidence a statement is based on.
  
  That becomes especially important later when the curriculum reaches technical confidence, role boundaries, and safe escalation.`
          },
          {
            title: "Why this is the bridge into the next modules",
            body: `This lesson is a direct bridge into:
  
  • Module 9, where the learner will connect reference genomes, transcripts, and annotation
  • Modules 10–12, where the learner will work on QC, artefacts, and evidence checking
  • Module 13 onward, where filtering and prioritisation depend on understanding what the variant file is actually summarising
  
  If the learner does not understand file flow, they may:
  
  • over-trust VCFs
  • underuse BAM/CRAM
  • misunderstand what FASTQ contributes
  • misinterpret negative or borderline findings
  
  So the habit this lesson should build is:
  
  before interpreting a result, ask which file stage it comes from and what kind of evidence that stage actually contains.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **The FASTQ → BAM/CRAM → VCF flow matters in clinical bioinformatics because raw reads, aligned evidence, and called variants are different evidence layers, and safe interpretation depends on knowing which layer you are using.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A beginner says, “The VCF says the variant passed filters, so we don’t really need to think about the earlier files.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because the VCF is only the called-variant summary stage. It tells you what the pipeline reported, but not the full raw or aligned evidence that led to that call. FASTQ still matters for understanding the original reads and their quality, and BAM/CRAM still matters for checking how the reads aligned and whether the site looks technically convincing. So a filtered VCF call can be an important clue, but safe clinical bioinformatics still depends on understanding the earlier evidence layers when confidence is being judged.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “FASTQ, BAM/CRAM, and VCF are different evidence layers in the sequencing pipeline. FASTQ shows the raw reads, BAM/CRAM shows the aligned read evidence, and VCF shows the called variants. I need to know which evidence layer I am looking at before I interpret a result.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "These files matter because each one represents a different level of evidence, and safe clinical bioinformatics depends on knowing which level of evidence you are looking at."
          }
        ],
        quiz: [
          {
            question: "Why does the FASTQ → BAM/CRAM → VCF flow matter?",
            options: [
              "Because the files are mainly storage choices with no difference in evidence level",
              "Because each file represents a different stage of the sequencing pipeline and a different layer of evidence",
              "Because only the first file is used in clinical genomics",
              "Because all three files contain the same information in different formats"
            ],
            answerIndex: 1,
            explanation:
              "The module’s main lesson is that the files belong to different pipeline stages: raw reads, aligned reads, and called variants."
          },
          {
            question:
              "Which file is usually the best place to inspect read-level support for a suspicious variant call?",
            options: ["FASTQ only", "BAM/CRAM", "VCF only", "Phenotype spreadsheet"],
            answerIndex: 1,
            explanation:
              "BAM/CRAM stores aligned reads and is therefore the main evidence-level file for locus-specific technical review."
          },
          {
            question:
              "Why can a variant fail to appear in a VCF even if something biologically relevant may still exist?",
            options: [
              "Because VCFs contain no genomic positions",
              "Because VCF is a later-stage summary influenced by earlier steps such as read quality, alignment, caller behaviour, and filtering",
              "Because VCF only stores phenotypes",
              "Because BAM files come after VCF in the pipeline"
            ],
            answerIndex: 1,
            explanation:
              "The pipeline from FASTQ to BAM to VCF includes multiple processing steps, and what appears in the VCF depends on those steps."
          },
          {
            question: "What is the safest overall message of Module 8?",
            options: [
              "VCF is the only file that really matters for downstream genomics",
              "FASTQ is mainly historical and can usually be ignored once BAM exists",
              "Different files represent different evidence layers, and good clinical bioinformatics depends on knowing which file is appropriate for which question",
              "BAM/CRAM and VCF are interchangeable once indexing is available"
            ],
            answerIndex: 2,
            explanation:
              "This is the integrated lesson of the module: different file types answer different questions because they represent different levels of processing and evidence."
          }
        ]
      }
    ]
  };