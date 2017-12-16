require 'slim'

module Slim
    class ERBConverter < Engine
        replace :StaticMerger, Temple::Filters::CodeMerger
        replace :Generator, Temple::Generators::ERB
    end
    
    class BB
        # filename is .slim
        def initialize(filename)
            @filename = filename
            test
        end
        
        def test
            File.open(@filename, "r") do |f|
                @test1 = f.read
                p @test1
            end
            p @test1
            @slim = ERBConverter.new.call(@test1)
            @file = File.open("#{@filename.gsub(/.slim/, "")}.html",'w')
            @file.print @slim
            @file.close
        end
    end
end


        def start
            Dir::chdir("./www")
            @slim = Slim::Template.new("index.slim").render(self)
            @file = File.open("index.html",'w')
            @file.print @slim
            @file.close
            Dir::chdir("..")
            puts system("monaca preview -p 8080")
        end

Dir::chdir("./www")
Dir::chdir("./templates")
Slim::BB.new("test.slim")



@str = Dir.glob(["*.slim"])
@str.each do |name|
    p ("#{name}")
    Slim::BB.new(name)
end
