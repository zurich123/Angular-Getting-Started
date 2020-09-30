import { Injectable} from '@angular/core';

import {IAlgorithm} from'./algorithm';

@Injectable({
     providedIn: 'root'
})
export class AlgorithmService {
    getAlgorithms() : IAlgorithm[] {
        return [
            {
              "AlgorithmId": 1,
              "Algorithm": "Linear Regression",
              "Type": "Supervised",
              "Prediction": "0.8",
              "starRating": 3.2,
              "imageUrl": "assets/images/leaf_rake.png"
            },
            {
              "AlgorithmId": 2,
              "Algorithm": "Naive Bayes",
              "Type": "Supervised",
              "Prediction": "0.8",
              "starRating": 4.2,
              "imageUrl": "assets/images/garden_cart.png"
            },
            {
              "AlgorithmId": 3,
              "Algorithm": "Logistic Regression",
              "Type": "Supervised",
              "Prediction": "0.8",
              "starRating": 4.8,
              "imageUrl": "assets/images/hammer.png"
            },
            {
              "AlgorithmId": 4,
              "Algorithm": "Random Forest",
              "Type": "Supervised",
              "Prediction": "0.8",
              "starRating": 3.7,
              "imageUrl": "assets/images/saw.png"
            },
            {
              "AlgorithmId": 5,
              "Algorithm": "K-Means",
              "Type": "UnSupervised",
              "Prediction": "0.7",
              "starRating": 4.6,
              "imageUrl": "assets/images/xbox-controller.png"
            }
          ]
    }
}