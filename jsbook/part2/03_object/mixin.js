// 混入：显式和隐式

function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key]
    }
  }
  return targetObj
}

var Vehicle = {
  engines: 1,
  igintion: function () {
    console.log("Turning on my engine")
  },
  drive: function () {
    this.igintion()
    console.log("Steering and moving forward")
  }
}

var Car = mixin(Vehicle, {
  wheels: 4,
/*   igintion: function() {
    console.log('car turning on.')
  }, */
  drive: function () {
    Vehicle.drive.call(this) // 尽量不要用 显示伪多态
    console.log("Rolling on all " + this.wheels + " wheels!")
  }
})
Car.drive()