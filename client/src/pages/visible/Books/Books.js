import React from "react";
import Col from "../../../utils/Col";
import Row from "../../../utils/Row";
import "./books.css";
import { FaAmazon } from "react-icons/fa";
import Button from "../../../utils/Button";

export default function Books() {
  return (
    <Row id="books">
      <div className="col-3 ">
        <img
          src="./images/handflower.jpg"
          alt="Book Cover Example"
          className="rounded book-img mb-4 align-middle"
        />
      </div>
      <div className="col mr-4">
        <Row>
          <Col>
            <h2>Our Bathroom Mirror</h2>
            <p>"This book is the total bomb dot com, yo" -Kasey</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, dolore soleat cum te, sint equidem an
              sea. Nec vide nonumy tibique at, eum id porro periculis
              adolescens. Ea sed modo dictas eligendi. Aperiri dolores sit te,
              id sea eros molestie. Pri et latine percipit pertinax, ad duo
              tamquam nominati periculis. An duo hinc persecuti, ius scaevola
              mandamus ad. In nulla erroribus theophrastus quo, ne atqui mundi
              tritani nam, et sed agam efficiantur. Ei bonorum urbanitas
              cotidieque pro, quem dicant pro te. Facilis reprimique pro cu.
              Ullum delenit dignissim ius ea.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We don't yet know the release date, but in the meantime find your
              next great read!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              text="Amazon"
              className="btn border btn-retailer"
              href="https://www.amazon.com/best-sellers-books-Amazon/zgbs/books"
            />
            <Button
              text="B&N"
              className="btn border btn-retailer"
              href="https://www.barnesandnoble.com/b/books/_/N-1fZ29Z8q8"
            />
            <Button
              text="Kobo"
              className="btn border btn-retailer"
              href="https://www.kobo.com/us/en/list/kwlbestsellers/2Kasy_Zqd0yBuwFlAL8Lbg"
            />
            <Button
              text="IndeBound"
              className="btn border btn-retailer"
              href="https://www.indiebound.org/"
            />
          </Col>
        </Row>
      </div>
    </Row>
  );
}
