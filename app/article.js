'use client'


import Image from "next/image";
// import photo form './assets/images/photo-1483794344563-d27a8d18014e.jpeg';

import photo5 from './assets/images/photo-1483794344563-d27a8d18014e.jpeg';
import photo6 from './assets/images/photo-1466781783364-36c955e42a7f.jpeg';
import photo7 from './assets/images/photo-1458501534264-7d326fa0ca04.jpeg';
import photo8 from './assets/images/photo-1556760544-74068565f05c.jpeg';
import photo9 from './assets/images/photo-1545205597-3d9d02c29597.jpeg';
import photo10 from './assets/images/photo-1461468611824-46457c0e11fd.jpeg';
import photo11 from './assets/images/photo-1681075401974-907cc62a4373.jpeg';


                    
                    
                    

export default function Article(){
    const features = [
        {
          title: 'Fuel Your Body Right',
          image: photo6,
          content: (
            <>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                March 13, 2024
              </p>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                Discover delicious recipes and expert tips to nourish your body and
                boost your energy levels.
              </p>
            </>
          ),
          link: '#',
        },
        // ... Add objects for the remaining features
      ];
      const testimonials = [
        {
          text: (
            <>
              <p className="card-text mbr-fonts-style display-7">
                The blog changed my life! I feel healthier, happier, and more
                motivated than ever before.
              </p>
            </>
          ),
          image: photo11,
          name: 'Samantha',
        },
        // ... Add objects for the remaining testimonials
      ];
return(
<div>
<section className="article8 cid-u6ScmHnmrA" id="about-us-8-u6ScmHnmrA">
  <div className="container">
    <div className="row justify-content-center">
      <div className="card col-md-12 col-lg-10">
        <div className="card-wrapper">
          <div className="image-wrapper d-flex justify-content-center mb-4">
          <Image
          src={photo5}
          />
          </div>
          <div className="card-content-text">
            <h3 className="card-title mbr-fonts-style mbr-white mt-3 mb-4 display-2">
            <strong>Empowering Wellness Choices</strong>
          </h3>
          <div className="row card-box align-left">
            <div className="item features-without-image col-12">
              <div className="item-wrapper">
                <p className="mbr-text mbr-fonts-style display-7">Welcome to our vibrant health and wellness hub, where we ignite the spark for a healthier you! Dive into a world of expertly crafted articles, tips, and resources designed to revolutionize your well-being journey.</p>
              </div>
            </div>
            <div className="item features-without-image col-12">
              <div className="item-wrapper">
                <p className="mbr-text mbr-fonts-style display-7">From the latest fitness trends to nourishing nutrition advice, we&#x27;ve got you covered. Explore the depths of mental health and indulge in self-care practices that will leave you glowing from the inside out.</p>
              </div>
            </div>
            <div className="item features-without-image col-12">
              <div className="item-wrapper">
                <p className="mbr-text mbr-fonts-style display-7">Join our community of wellness warriors as we embark on a quest for holistic health. Let&#x27;s break barriers, shatter stereotypes, and redefine what it means to thrive in today&#x27;s fast-paced world.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="image02 cid-u6ScmHowLF mbr-fullscreen mbr-parallax-background" id="image-13-u6ScmHowLF">
    <div className="container">
        <div className="row"></div>
    </div>
</section>
<section className="list1 cid-u6ScmHo60m" id="faq-1-u6ScmHo60m">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-12 col-md-12 col-lg-10 m-auto">
				<div className="content">
					<div className="mbr-section-head align-left mb-5">
						<h3 className="mbr-section-title mb-2 mbr-fonts-style display-2">
							<strong>Wellness Wisdom</strong>
						</h3>
					</div>
					<div id="bootstrap-accordion_0" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
						<div className="card mb-3">
							<div className="card-header" role="tab" id="headingOne">
								<a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse1_0" aria-expanded="false" aria-controls="collapse1">
									<h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">
										How can I boost my energy levels?
									</h6>
									<span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
								</a>
							</div>
							<div id="collapse1_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
								<div className="panel-body">
									<p className="mbr-fonts-style panel-text display-7">
										Discover the secrets to skyrocketing your energy with our expert tips and revitalizing practices.
									</p>
								</div>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-header" role="tab" id="headingOne">
								<a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse2_0" aria-expanded="false" aria-controls="collapse2">
									<h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">
										Why is self-care important for well-being?
									</h6>
									<span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
								</a>
							</div>
							<div id="collapse2_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
								<div className="panel-body">
									<p className="mbr-fonts-style panel-text display-7">
										Uncover the transformative power of self-care and how it can be your ultimate tool for a balanced life.
									</p>
								</div>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-header" role="tab" id="headingOne">
								<a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse3_0" aria-expanded="false" aria-controls="collapse3">
									<h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">
										What are the best foods for mental clarity?
									</h6>
									<span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
								</a>
							</div>
							<div id="collapse3_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
								<div className="panel-body">
									<p className="mbr-fonts-style panel-text display-7">
										Delve into the world of brain-boosting foods that will sharpen your focus and enhance your cognitive function.
									</p>
								</div>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-header" role="tab" id="headingOne">
								<a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse4_0" aria-expanded="false" aria-controls="collapse4">
									<h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">
										How do I start a fitness routine at home?
									</h6>
									<span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
								</a>
							</div>
							<div id="collapse4_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
								<div className="panel-body">
									<p className="mbr-fonts-style panel-text display-7">
										Kickstart your fitness journey with our easy-to-follow home workout tips and turn your living room into a personal gym!
									</p>
								</div>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-header" role="tab" id="headingOne">
								<a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse5_0" aria-expanded="false" aria-controls="collapse5">
									<h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">
										Why is mindfulness essential for overall health?
									</h6>
									<span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
								</a>
							</div>
							<div id="collapse5_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
								<div className="panel-body">
									<p className="mbr-fonts-style panel-text display-7">
										Learn how mindfulness can revolutionize your well-being by reducing stress, improving focus, and fostering inner peace.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="features023 cid-u6ScmHopHt" id="metrics-1-u6ScmHopHt">
    <div className="container">
        <div className="row content-row justify-content-center">
            <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                <div className="item-wrapper">
                    <div className="title mb-2 mb-md-3">
                        <span className="num mbr-fonts-style display-1"><strong>10K+</strong></span>
                    </div>
                    <h4 className="card-title mbr-fonts-style display-5">
                        <strong>Happy Readers</strong>
                    </h4>
                </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                <div className="item-wrapper">
                    <div className="title mb-2 mb-md-3">
                        <span className="num mbr-fonts-style display-1"><strong>500+</strong></span>
                    </div>
                    <h4 className="card-title mbr-fonts-style display-5">
                        <strong>Wellness Articles</strong>
                    </h4>
                </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                <div className="item-wrapper">
                    <div className="title mb-2 mb-md-3">
                        <span className="num mbr-fonts-style display-1"><strong>500K+</strong></span>
                    </div>
                    <h4 className="card-title mbr-fonts-style display-5">
                        <strong>Community Members</strong>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="features03 cid-u6ScmHonFu" id="news-1-u6ScmHonFu">
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
          <div className="col-12 content-head">
            <div className="mbr-section-head">
              <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Wellness Wonders</strong>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="item features-image col-12 col-md-6 col-lg-3 active" key={index}>
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                   
                    // layout="fill" // Adjust layout as needed
                  />
                </div>
                <div className="item-content align-left">
                  <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                    <a className="text-black fw-bold" href={feature.link}>
                      {feature.title}
                    </a>
                  </h6>
                  {feature.content}
                  <div className="mbr-section-btn item-footer">
                    <a href={feature.link} className="btn item-btn btn-primary display-7">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="blog-2 cid-u6ScmHoPyQ" id="blog-2-u6ScmHoPyQ">
    <div className="container-fluid">
        <div className="row justify-content-center mb-5">
            <div className="col-12 content-head">
                <div className="mbr-section-head">
                    <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Mindful Musings</strong>
                    </h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="item features-image col-12 col-md-6 col-lg-3 active">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                    <Image
                    src={photo7}
                  />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mt-0 mb-3 display-7">
                            Empower
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                            <strong>Empower Yourself Today</strong>
                        </h6>

                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Join
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                    
                    <Image
                    src={photo8}
                  />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            Revitalize
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                            <strong>Revitalize Your Mindset Now</strong>
                        </h6>
                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Join
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                   
                    <Image
                    src={photo9}
                  />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            Inspire
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mt-0 mb-3 display-5">
                            <strong>Inspire Your Wellness Journey</strong>
                        </h6>
                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Join
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                    
                    <Image
                    src={photo10}
                  />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            Transform
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mt-0 mb-3 display-5">
                            <strong>
                                Transform Your Life Tomorrow
                            </strong>
                        </h6>

                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Join
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="people05 cid-u6ScmHo6qC" id="testimonials-5-u6ScmHo6qC">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-12 mb-0 content-head">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Inspire</strong>
            </h3>
          </div>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="item features-without-image col-12 col-md-6 col-lg-4 active" key={index}>
              <div className="item-wrapper">
                <div className="card-box align-left">
                  {testimonial.text}
                  <div className="img-wrapper mt-4 mb-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={300} // Replace with appropriate width
                      height={200}
                    />
                  </div>
                  <h5 className="card-title mbr-fonts-style display-7">
                    {testimonial.name}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="article13 cid-u6ScmHoeUy" id="call-to-action-5-u6ScmHoeUy">
    <div className="container">
        <div className="row justify-content-center">
            <div className="card col-md-12 col-lg-10">
                <div className="card-wrapper">
                    <div className="card-box align-center">
                        <h4 className="card-title mbr-fonts-style display-2">
                            <strong>Join Our Wellness Revolution Today</strong>
                        </h4>
                        <p className="mbr-text mbr-fonts-style mt-4 display-7">
                        Ready to embark on a journey towards holistic well-being? Join our vibrant community of wellness enthusiasts and start your transformation today!
                        </p>
                        <div className="mbr-section-btn mt-4">
                        <a className="btn btn-primary display-4" href="#">
                        Join Now
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="social05 cid-u6ScmHpSUe" id="follow-us-2-u6ScmHpSUe">
    <div className="container">
        <div className="row">
            <h3 className="mbr-section-title align-center mb-5 mbr-fonts-style display-2">
                <strong>Join Our Wellness Community</strong>
            </h3>
            <div className="col-12">
                <div className="social-row">
                    <div className="soc-item">
                        <a href="#" target="_blank">
                            <span className="mbr-iconfont socicon socicon-facebook"></span>
                        </a>
                    </div>
                    <div className="soc-item">
                        <a href="#" target="_blank">
                            <span className="mbr-iconfont socicon-twitter socicon"></span>
                        </a>
                    </div>
                    <div className="soc-item">
                        <a href="#" target="_blank">
                            <span className="mbr-iconfont socicon-instagram socicon"></span>
                        </a>
                    </div>
                    <div className="soc-item">
                        <a href="#" target="_blank">
                            <span className="mbr-iconfont socicon socicon-linkedin"></span>
                        </a>
                    </div>
                    <div className="soc-item">
                        <a href="#" target="_blank">
                            <span className="mbr-iconfont socicon socicon-twitch"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


</div>




);


};