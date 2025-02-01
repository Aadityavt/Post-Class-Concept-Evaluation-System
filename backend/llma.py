from llama_cpp import Llama

llm = Llama(model_path="llama-7b.gguf")  # Make sure you download a GGUF model
response = llm("What is Newton's First Law?")
print(response)
