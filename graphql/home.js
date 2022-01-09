import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getHomeInfo = async () => {
  const query = gql`
    query getHomeInfo {
      ufaAbouts {
        id
        nameAbout
        refAboutPoint {
          id
          nameAboutPoint
        }
        contentAbout
      }
      ufaWhyChooseUses {
        contentWhyChooseUs
        id
        nameWhyChooseUse
        refWhyChooseUsPoint {
          id
          descWhyChooseUs
          nameWhyChooseUsePoint
          orderBy
        }
      }
      ufaCases {
        headingCase
        id
        refCasePoint {
          nameCase
          imageCase {
            fileName
            height
            mimeType
            width
            url
          }
          urlDetailCase
        }
      }
      contactUses {
        nameContact
        typeContact
      }
      ufaProducts {
        contentProduct
        headingProduct
        refProductPoints {
          id
          imageService {
            height
            id
            mimeType
            url
            width
          }
          isActive
          nameService
        }
      }
      ufaTestimonials {
        headingTetimonial
        refTestimonialPoint {
          descriptionTestimonial
          aboutFromTestimonial
          fromTestimonial
          pictureFromTestimonial {
            height
            id
            mimeType
            url
            width
          }
        }
      }
      ufaFaqs {
        contentFaq
        id
        nameFaq
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result;
};
