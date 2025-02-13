import React, { useEffect } from "react";
import $ from "jquery";
import "./admin.css";
import EarningsOverviewChart from "../Components/EarningsOverviewChart";
import RevenueSourcesCard from "../Components/RevenueSourcesCard";
import Sidebar from "../Components/Sidebar";
import AdminHeader from "../Components/AdminHeader";

const Admin = () => {
  useEffect(() => {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $(window).resize(function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    });

    // Prevent scrolling when the sidebar is hovered
    $("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        if ($(window).width() > 768) {
          const o = e.originalEvent.wheelDelta || -e.originalEvent.detail;
          this.scrollTop += 30 * (o < 0 ? 1 : -1);
          e.preventDefault();
        }
      }
    );

    $(document).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });

    $(document).on("click", "a.scroll-to-top", function (e) {
      const target = $(this).attr("href");
      $("html, body").animate(
        { scrollTop: $(target).offset().top },
        1000,
        "easeInOutExpo"
      );
      e.preventDefault();
    });

    return () => {
      // Cleanup event listeners
      $("#sidebarToggle, #sidebarToggleTop").off("click");
      $(window).off("resize");
      $("body.fixed-nav .sidebar").off("mousewheel DOMMouseScroll wheel");
      $(document).off("scroll click");
    };
  }, []);

  return (
    <>
      {/* <body id="page-top"> */}

      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
          <AdminHeader/>
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div class="container-fluid">
              {/* Page Heading */}
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                  <i class="fas fa-download fa-sm text-white-50"></i> Generate
                  Report
                </a>
              </div>

              {/* Content Row */}
              <div class="row">
                {/* Earnings (Monthly) Card Example */}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            $40,000
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings (Monthly) Card Example */}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            $215,000
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings (Monthly) Card Example */}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Tasks
                          </div>
                          <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                50%
                              </div>
                            </div>
                            <div class="col">
                              <div class="progress progress-sm mr-2">
                                <div
                                  class="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: 50 }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pending Requests Card Example */}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            18
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* {/* Content Row */}

              <div class="row">
                {/* {/* Area Chart */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                      </h6>
                    </div>
                    <div className="card-body">
                      <EarningsOverviewChart />
                    </div>
                  </div>
                </div>

                {/* {/* Pie Chart */}
                <RevenueSourcesCard />
              </div>

              {/* {/* Content Row */}
              <div class="row">
                {/* {/* Content Column */}
                <div class="col-lg-6 mb-4">
                  {/* {/* Project Card Example */}
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
                    </div>
                    <div class="card-body">
                      <h4 class="small font-weight-bold">
                        Server Migration <span class="float-right">20%</span>
                      </h4>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: 20 }}
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4 class="small font-weight-bold">
                        Sales Tracking <span class="float-right">40%</span>
                      </h4>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: 40 }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4 class="small font-weight-bold">
                        Customer Database <span class="float-right">60%</span>
                      </h4>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: 60 }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4 class="small font-weight-bold">
                        Payout Details <span class="float-right">80%</span>
                      </h4>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: 80 }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4 class="small font-weight-bold">
                        Account Setup <span class="float-right">Complete!</span>
                      </h4>
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: 100 }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
    </>
  );
};

export default Admin;
