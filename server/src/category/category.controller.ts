import { Controller,Param,Body, Get , Post , Put, Delete , Logger  } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';

@Controller('api/categories')
export class CategoryController {
    private logger = new Logger('====== Category Controller ====');
    constructor(private categoryService : CategoryService){}

    @Get()
    getAll(){
        return "return all categories";
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return "return category with id : "+id
    }


    @Post()
    post(@Body() data : CategoryDto){
        return "create new category"
    }


    @Put(':id')
    update(@Param("id") id: number, @Body() data : CategoryDto){
        return "update existing category with id "+ id;
    }

    @Delete(':id')
    destroy(@Param('id') id : number){
        return  "destroy a category with id "+id;
    }


}
