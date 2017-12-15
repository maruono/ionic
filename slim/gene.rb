require 'slim'

@slim = Slim::Template.new("index.slim").render(self)
@file = File.open("index.html",'w')
@file.print @slim
@file.close