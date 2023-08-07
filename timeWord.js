function timeWord(time) {
    const hours = parseInt(time.slice(0, 2));
    const minutes = parseInt(time.slice(3));
  
    const hourWords = [
      'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve'
    ];
  
    const minuteWords = [
      'oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
      'twenty'
    ];
  
    if (minutes === 0) {
      if (hours === 0) return 'midnight';
      if (hours === 12) return 'noon';
      return hourWords[hours % 12] + ' o’clock ' + (hours < 12 ? 'am' : 'pm');
    }
  
    const hourWord = hourWords[hours % 12];
    const minuteWord = minutes <= 20 ? minuteWords[minutes] : minuteWords[20] + ' ' + minuteWords[minutes - 20];
  
    return hourWord + ' ' + minuteWord + ' ' + (hours < 12 ? 'am' : 'pm');
  }
  
  module.exports = timeWord;