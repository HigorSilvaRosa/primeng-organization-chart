import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import * as TreeModel from 'tree-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  data: TreeNode[];

  tree: any;

  draggedNode;

  ngOnInit() {
    this.data = [{
      label: 'Neo',
      children: [
        {
          label: 'Diogo',
          children: [
            {
              label: 'Higor',
              children: [
                {
                  label: 'Angular 2'
                },
                {
                  label: 'PrimeNg'
                }
              ]
            },
            {
              label: 'Edson',
              children: [
                {
                  label: 'PHP',
                },
                {
                  label: 'Amazon AWS'
                },
                {
                  label: 'Docker'
                }
              ]
            }
          ]
        },
      ]
    }];

    this.tree = new TreeModel();
    this.tree = this.tree.parse(this.data);
  }

  dragStart(event, node) {
    this.draggedNode = node;
  }

  dragEnd(event) {
    this.draggedNode = null;
  }

  dropNode(event, node) {
    console.log(this.draggedNode);
    console.log(node);
  }
}
