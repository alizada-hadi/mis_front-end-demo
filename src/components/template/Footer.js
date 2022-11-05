import React from "react";
import classNames from "classnames";
import { Container } from "components/shared";
import { PAGE_CONTAINER_GUTTER_X } from "constants/theme.constant";

const FooterContent = () => {
  return (
    <div className="flex items-center justify-between flex-auto w-full">
      <span>
        Developed by <span className="font-semibold">Soft Unit Team</span>
      </span>
    </div>
  );
};

export default function Footer({ pageContainerType }) {
  return (
    <footer
      className={classNames(
        `footer flex flex-auto items-center h-16 ${PAGE_CONTAINER_GUTTER_X}`
      )}
    >
      {pageContainerType === "contained" ? (
        <Container>
          <FooterContent />
        </Container>
      ) : (
        <FooterContent />
      )}
    </footer>
  );
}
