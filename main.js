const Ray = function() {
  return {
    length: 0,
    push: function(value){
      this[this.length] = value
      this.length++
    },
    
    pop: function(){
      const removed1 = this[this.length-1]
      delete this[this.length-1]
      this.length--
      return removed1
    },
    unshift: function(value){
      this.length++
      for (let i = this.length-1; i >0; i -- ){
        this[i] = this[i-1]
      }
      this[0] = value
    },
    shift: function(){
      const remove = this[0]
      for (let i = 0;i < this.length; i++){
        this[i] = this[i+1]
      }
      delete this[this.length-1]
      this.length--
      return remove
    },
    include: function(value){
      for (let i = this.length-1; i >=0; i -- ){
        if (this[i] === value){
          return true
        }
      }
      return false
    }
  }
}

module.exports = {
  Ray,
}