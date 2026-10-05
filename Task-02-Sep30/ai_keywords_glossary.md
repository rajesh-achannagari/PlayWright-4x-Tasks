# AI Keywords

## The Core Brain (Models & Architecture)
* **Gen AI (Generative AI):** Systems designed to create new content (text, images, code) based on patterns learned from training data, rather than just categorizing existing data.
* **Neural Network:** A computing architecture inspired by the human brain, made of interconnected nodes (neurons) that process data and learn to recognize patterns.
* **Parameter:** The internal variables (like synapses in a brain) a model adjusts during training. A model with "70 billion parameters" has 70 billion of these tunable dials.
* **Weights:** A specific type of parameter that determines the strength and importance of the connection between two neurons in a neural network.
* **Attention Number (Attention Mechanism):** The mathematical scores a model uses to determine which words in a sentence matter most to each other. It helps the AI know that in "river bank," it should focus on water, not finance.

## Text & Inputs (How AI reads)
* **Token:** The basic building block of text for an AI. It can be a whole word, a syllable, or just a character (e.g., "hamburger" might be split into the tokens "ham", "bur", "ger").
* **Context Window:** The model's short-term memory. It is the maximum amount of text (measured in tokens) the AI can read, remember, and generate in a single interaction.
* **Prompt:** The instruction, question, or context you feed into an AI to trigger a response.
* **Padding (likely what "Parding" meant):** Adding empty, meaningless tokens to the end of a short piece of text so it matches the length of a longer text, allowing the AI to process multiple inputs at the exact same size.

## Output & Behavior (How AI responds)
* **Temperature:** A setting that controls the randomness of an AI's output. A low temperature (e.g., 0.1) produces focused, highly predictable answers; a high temperature (e.g., 0.9) produces creative, varied responses.
* **Hallucination:** When an AI generates false, nonsensical, or entirely invented information but presents it confidently as a fact.
* **Bias:** Systematic errors or unfair prejudices in an AI's output, usually absorbed from skewed or unrepresentative training data.
* **Chatbot:** A software interface (often powered by Gen AI) designed to simulate human conversation.

## RAG & Data (Connecting AI to facts)
* **RAG (Retrieval-Augmented Generation):** A technique where an AI searches an external database for factual information before it generates an answer, significantly reducing hallucinations.
* **Chunks:** Smaller, manageable pieces of a large document. In RAG systems, long PDFs or websites are broken into chunks so the AI can search and read just the relevant paragraphs.
* **Embedding:** Translating text, images, or audio into lists of numbers (vectors) so a computer can understand their semantic meaning and relationship to other concepts.
* **Vector DB (Database):** A specialized database designed to store and instantly search through embeddings to find information that has a similar meaning to a user's prompt.
* **Schema:** The structured blueprint of how data should be organized. AI uses schemas to understand how to correctly format its outputs (like generating a clean JSON file) or read databases.

## Agents & Tooling (Making AI do things)
* **Agentic AI / Agents:** AI systems designed to act autonomously. Instead of just answering a question, an agent can make a multi-step plan, use external tools, and execute a workflow to achieve a goal.
* **Skills:** Specific functions or capabilities given to an AI agent (e.g., the ability to search the web, execute Python code, or read a spreadsheet).
* **LangChain:** A highly popular open-source coding framework used by developers to easily stitch together LLMs, Vector DBs, and tools to build apps and agents.
* **MCP (Model Context Protocol):** A standardized, open protocol that allows AI models to securely connect to external data sources, enterprise tools, and local development environments.

## Training & Testing (Improving the AI)
* **Fine Tune:** Taking a generalized pre-trained model and training it further on a specific, targeted dataset to make it an expert at a niche task (like writing in your company's specific legal tone).
* **Ground Truth:** The absolute correct answer or verified factual data used to train an AI or test its accuracy.
* **Evals (Evaluations):** Automated or manual tests used to measure an AI model's performance, accuracy, and safety against known benchmarks.
* **Harness:** A testing framework (like the LM Evaluation Harness) that provides a standardized environment for researchers to run "evals" on different AI models fairly.

## Security & Alignment (Keeping AI safe)
* **GuardRails:** Safety filters, rules, and secondary models placed around an AI to prevent it from generating toxic content, leaking data, or executing dangerous actions.
* **Prompt Injection:** A cyberattack where a malicious user deliberately feeds an AI a prompt designed to "trick" it into ignoring its original safety instructions and doing something harmful.