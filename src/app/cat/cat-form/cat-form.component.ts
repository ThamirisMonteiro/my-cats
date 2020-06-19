import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/model/cat.model';
import { CatService } from 'src/app/services/cat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  public cat : Cat = new Cat();
  public displayMsg : boolean;

  constructor(private catService: CatService, private router: Router, private activatedRoute : ActivatedRoute)
  {
    if(this.activatedRoute.snapshot.params.id != null)
    {
      this.catService.findById(this.activatedRoute.snapshot.params.id)
      .then((cat : Cat) => {
      this.cat = cat;
    })
      .catch(e => console.error(e));
    }
  }

  ngOnInit(): void {
  }

  public save(): void
  {
    if (this.cat._id != null)
    {
      this.update();
    }
    else{
      this.insert();
    }
  }

  private update() : void
  {
    this.catService.addCat(this.cat)
    .then((cat : Cat) => {
      this.displayMsg = true;
      setTimeout(() => {
        this.displayMsg = false;},3000);
    })
    .catch(e => console.error(e));
  }

  private insert() : void
  {
    this.catService.addCat(this.cat)
    .then((cat : Cat) => {
      this.router.navigate(['/cats']);
    })
    .catch(e => console.error(e));
  }

}
