import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
	var user = JSON.parse(localStorage.getItem("user_data"));

	var userFirst = user.firstName;
	var userLast = user.lastName;
	var userAge = user.age;
	var userWeight = user.weight;

	return (
		<div class="auth">
			<link
				href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
				rel="stylesheet"
				id="bootstrap-css"
			/>
			<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css" />

			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<div class="card-title mb-4">
									<div class="d-flex justify-content-start">
										<div class="image-container">
											<img
												src="http://placehold.it/150x150"
												id="imgProfile"
												style={{ width: 150, height: 150 }}
												class="img-thumbnail"
											/>
											<div class="middle">
												<input
													type="button"
													class="btn btn-secondary"
													id="btnChangePicture"
													value="Change"
												/>
												<input
													type="file"
													style={{ display: "none" }}
													id="profilePicture"
													name="file"
												/>
											</div>
										</div>
										<div class="userData ml-3">
											<h2
												class="d-block"
												style={{ fontSize: 26, fontWeight: "bold" }}
											>
												<a href="javascript:void(0);">
													{userFirst} {userLast}
												</a>
											</h2>
											<h6 class="d-block">
												<a href="javascript:void(0)">runningTotal</a> Total
												Caffeine Intake{" "}
											</h6>
											<h6 class="d-block">
												<a href="javascript:void(0)">dailyCaffeine</a> Daily
												Caffeine Intake
											</h6>
										</div>
										<div class="ml-auto">
											<input
												type="button"
												class="btn btn-primary d-none"
												id="btnDiscard"
												value="Discard Changes"
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-12">
										<ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
											<li class="nav-item">
												<a
													class="nav-link active"
													id="basicInfo-tab"
													data-toggle="tab"
													href="#basicInfo"
													role="tab"
													aria-controls="basicInfo"
													aria-selected="true"
												>
													Basic Info
												</a>
											</li>
											<li class="nav-item"></li>
										</ul>
										<div class="tab-content ml-1" id="myTabContent">
											<div
												class="tab-pane fade show active"
												id="basicInfo"
												role="tabpanel"
												aria-labelledby="basicInfo-tab"
											>
												<div class="row">
													<div class="col-sm-3 col-md-3 col-5">
														<label style={{ fontWeight: "bold" }}>
															Full Name
														</label>
													</div>
													<div class="col-md-8 col-6">
														{userFirst} {userLast}
													</div>
												</div>
												<hr />

												<div class="row">
													<div class="col-sm-3 col-md-3 col-5">
														<label style={{ fontWeight: "bold" }}>
															Age
														</label>
													</div>
													<div class="col-md-8 col-6">{userAge}</div>
												</div>
												<hr />

												<div class="row">
													<div class="col-sm-3 col-md-3 col-5">
														<label style={{ fontWeight: "bold" }}>
															Weight
														</label>
													</div>
													<div class="col-md-8 col-6">
														{userWeight}lbs
													</div>
												</div>
												<hr />
												<div class="row">
													<div class="col-sm-3 col-md-3 col-5">
														<label style={{ fontWeight: "bold" }}>
															Daily Recommended Caffeine Intake
														</label>
													</div>
													<div class="col-md-8 col-6">
														user.recommendation
													</div>
												</div>
												<hr />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
