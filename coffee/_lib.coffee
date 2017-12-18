#ここにライブラリとして記述する

class Click_coffee
  constructor: (@object) ->
    alert @object
  story1: ->
    $(@object).click =>
      alert @object
      
# rakefileでやりました