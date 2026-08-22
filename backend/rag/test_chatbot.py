from chatbot import ask_chatbot

while True:

    question = input("\nYou: ")

    if question.lower() == "exit":
        break

    answer = ask_chatbot(question)

    print("\nYugan Assistant:", answer)