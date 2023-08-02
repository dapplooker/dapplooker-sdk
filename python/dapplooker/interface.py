"""
This class represents an error response from the DappLooker API.

Attributes:
    success (bool): Whether the request was successful.
    outputFormatEntered (str): The output format that was entered by the user.
    msg (str): The error message.
"""

class ErrorResponse:
    def __init__(self, success, outputFormatEntered, msg):
        """
        Initializes the `ErrorResponse` object.

        Args:
            success (bool): Whether the request was successful.
            outputFormatEntered (str): The output format that was entered by the user.
            msg (str): The error message.
        """
        self.success = success
        self.outputFormatEntered = outputFormatEntered
        self.msg = msg
