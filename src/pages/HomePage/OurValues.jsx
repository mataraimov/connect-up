import React from 'react';
import { Link } from 'react-router-dom';

const OurValues = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mx-auto">
          <div className="value-block text-center bg-info p-4 w-50 ">
            <h2 className="text-white">Наши ценности</h2>
            <p className="text-white">
              Наши идеи - это основополагающие принципы, на которых строится наша университетская
              община. Мы верим в инновации, ведущие к новым горизонтам знаний и развитию. Наша идея
              - вдохновлять и поддерживать студентов в их стремлении к достижению высших целей.
            </p>
            <img
              className="img-fluid"
              width={300}
              src="https://www.shutterstock.com/image-vector/business-values-two-businessmen-shaking-260nw-1658106889.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-7 mx-auto">
          <div className="value-block text-center bg-success p-4 w-50">
            <h2 className="text-white">Наша миссия</h2>
            <p className="text-white">
              Миссия нашего университета заключается в обеспечении качественного образования,
              способствующего формированию лидеров, готовых к решению сложных вызовов современного
              мира. Мы стремимся создать образовательную среду, способствующую развитию критического
              мышления, творческих способностей и социальной ответственности.
            </p>
            <img
              className="img-fluid"
              width={300}
              src="https://st2.depositphotos.com/41604320/42052/v/450/depositphotos_420526196-stock-illustration-business-mission-illustration-man-looking.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-7 mx-auto">
          <div className="value-block text-center bg-warning p-4 w-50">
            <h2 className="text-white">Наше видение</h2>
            <p className="text-white">
              Наше видение - это стремление к созданию интеллектуального и культурного центра,
              признанного как национально, так и международно. Мы видим себя как ключевого игрока в
              области высшего образования, вдохновляющего и поддерживающего интеллектуальное
              развитие общества.
            </p>
            <img
              className="img-fluid"
              width={300}
              src="https://st2.depositphotos.com/41604320/42052/v/450/depositphotos_420526126-stock-illustration-business-vision-illustration-businessman-standing.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
