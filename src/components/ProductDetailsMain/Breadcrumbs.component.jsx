import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

function Breadcrumbs() {
  const breadcrumbs = useReactRouterBreadcrumbs();

  const BreadCrumbsWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    div {
      & > * {
        color: ${({ theme }) => theme.colors.textColor};
        margin-right: 5px;
      }
    }
  `;

  return (
    <>
      <BreadCrumbsWrap className="breadcrumbs">
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <div className="bc" key={match.url}>
            <Link to={match.url || ""}>{breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && <span>/</span>}
          </div>
        ))}
      </BreadCrumbsWrap>
    </>
  );
}

export default Breadcrumbs;
