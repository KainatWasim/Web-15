   function checkPalindrome() {
      var text = document.getElementById("text-input").value;
      var result = document.getElementById("result");

      if (text === "") {
        result.innerHTML = "Please enter a word!";
        result.className = "result error";
        return;
      }

      var cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
      var reversedText = cleanText.split("").reverse().join("");

      if (cleanText === reversedText) {
        result.innerHTML = `"${text}" is a Palindrome!`;
        result.className = "result success";
      } else {
        result.innerHTML = `"${text}" is NOT a Palindrome!`;
        result.className = "result error";
      }
    }
