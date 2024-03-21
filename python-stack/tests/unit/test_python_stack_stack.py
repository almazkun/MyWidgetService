import aws_cdk as core
import aws_cdk.assertions as assertions

from python_stack.python_stack_stack import PythonStackStack


# example tests. To run these tests, uncomment this file along with the example
# resource in python_stack/python_stack_stack.py
def test_sqs_queue_created():
    app = core.App()
    stack = PythonStackStack(app, "python-stack")
    template = assertions.Template.from_stack(stack)


#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
